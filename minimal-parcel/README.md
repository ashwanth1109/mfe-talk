# Understanding MFE under the hood using Parcel bundler

## Building `container`

`mkdir container && cd container && npm init -y && tsc --init && npm i -D parcel-bundler && npm i react react-dom`

Update tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

Add index.html

```html
<html>
  <body>
    <h1>Test</h1>
  </body>
</html>
```

Add start script `parcel index.html`

## Building `header` MFE

```html
<!--index.html-->
<html>
  <body>
    <div id="root"></div>
    <script src="./index.tsx"></script>
  </body>
</html>
```

```tsx
// index.tsx
import React from "react";
import { render } from "react-dom";

(() => {
  const mount = (id: string) => {
    render(
      <div style={{ height: "60px", background: "black" }} />,
      document.getElementById(id)
    );
  };

  window["mountHeader"] = mount;

  if (!window["container-context"]) {
    mount("root");
  }
})();
```

Run the `header` MFE with this script: `parcel index.html --port 3001`

Parcel generates the following files in `dist`:

- `index.html`
- `header.f69400ca.js` (some hash based on either content or filename depending on whether you pass parameter: `--no-content-hash`)

At the time of writing parcel (v1) has no way of creating files without hash in the name.
See [2056](https://github.com/parcel-bundler/parcel/issues/2056) and [2403](https://github.com/parcel-bundler/parcel/issues/2403).

We create a mount function

```tsx
import { render } from "react-dom";

const mount = (id: string) => {
  render(
    <div style={{ height: "60px", background: "black" }} />,
    document.getElementById(id)
  );
};
```

This is because we want the `header` MFE to be loaded into the `root` element. But in `container`, the `header` MFE should be loaded into a div with id `header`. So, when we run the `header` MFE on port 3001, the following check will run

```ts
if (!window["container-context"]) {
  mount("root");
}
```

`window["container-context"]` is a variable to track whether the MFE is loaded in container or as a standalone app. If its a standalone app, then mount is called to mount MFE onto `root`.

If it is the `container-context`, then container will invoke mount as needed.

## Building `container` shell

```html
<html>
  <body>
    <div id="root"></div>
    <script>
      window["container-context"] = true;
    </script>
    <script src="http://localhost:3001/header.f69400ca.js"></script>
    <script src="./index.tsx"></script>
  </body>
</html>
```

```tsx
import React from "react";
import ReactDOM from "react-dom";

(() => {
  const App = () => {
    return (
      <div>
        <div id="header" />
        <h1>Container</h1>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
  window["mountHeader"]("header");
})();
```

In the HTML, we load `<script src="http://localhost:3001/header.f69400ca.js"></script>` first before `index.tsx` because `index.tsx` needs `window["mountHeader"]` function to be defined which is done by the header MFE.
The `container` then loads its app onto root and then the mount function (`window["mountHeader"]`) for `header` MFE is called and loads header into the container.

The container app should run successfully and should also render the header.

While this works, there are two problems you should already be able to notice:

1. You have to update the script hash manually (every time it changes) and its not sustainable.
2. If you look at the `header.xxxxx.js` file loaded in your network tab, you will see that `parcel-bundler` from `header` has bundled the `react` and `react-dom` dependency inside. You will also see the same dependency loaded again inside `container.xxxxx.js`. So, the same dependencies are loaded multiple times (duplicate dependencies).

These are a few problems (amongst others) that webpack module federation solves out of the box for you.
See `02-webpack-module-federation` directory for an example with webpack module federation.
