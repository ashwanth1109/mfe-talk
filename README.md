# Building React MFE using Webpack Module Federation

Table of contents:

- [Creating container](#Creating container)

## Minimal example with parcel bundler (bonus)

This section is to give an introduction on how run-time integration can be achieved with any bundler.
It helps you understand some challenges solved by webpack MFE. Feel free to skip this if you're not interested.

[Link to example](./minimal-example)

## Creating container

### Installing dependencies

```shell script
mkdir container && cd container
npm init -y
npm i react@17.0.1 react-dom@17.0.1 react-router-dom@5.2.0 @emotion/react@11.1.4 @emotion/styled@11.0.0 @material-ui/core@4.11.2 rxjs@6.6.3
npm i -D ts-node@9.1.1 typescript@4.1.3
npm i -D webpack@5.11.1 webpack-cli@4.3.1 webpack-dev-server@3.11.1 webpack-merge@5.7.3 html-webpack-plugin@4.5.1
npm i -D @babel/core@7.12.10 @babel/preset-react@7.12.10 @babel/preset-typescript@7.12.7 babel-loader@8.2.2
npm i -D @types/node@14.14.20 @types/react@17.0.0 @types/react-dom@17.0.0 @types/react-router-dom@5.1.7
tsc --init
```

Add scripts to `package.json`,

```json
{
  "scripts": {
    "start": "webpack serve --config config/webpack.dev.js",
    "build": "webpack --config config/webpack.prod.js"
  }
}
```

Replace `tsconfig.json`

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "strict": true,
    "jsx": "react",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*"]
}
```

### Add webpack config to `config` directory

Add webpack.common.js config

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // starting point of application, and here webpack starts bundling
  entry: "./src/index",
  // options for resolving module requests
  resolve: {
    // extensions that are allowed when resolving modules (in order)
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // directories where to look for modules (in order)
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  // configuration regarding modules
  module: {
    // rules for modules (configure loaders, parser options, etc.)
    rules: [
      {
        // Conditions:
        test: /\.tsx?$/,
        // package allows transpiling JavaScript files using Babel and webpack.
        loader: "babel-loader",
        // exclude babel-loader from transpiling files from node_modules
        exclude: /node_modules/,
        options: {
          // preset - an assembly of pre-existing set of plugins
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  // plugins that extend webpack core functionality
  plugins: [
    // simplifies creation of HTML files to serve your webpack bundles.
    // useful for webpack bundles that include a hash in the filename.
    new HtmlWebpackPlugin({
      // supply base template for plugin to generate HTML from
      template: "./public/index.html",
    }),
  ],
};
```

Add webpack.dev.js config

```js
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      // where webpack will output assets relative to root
      publicPath: "/",
      // can use hash, contenthash or chunkhash
      // helpful to implement long term caching on the browser
      filename: "[name].[contenthash].js",
    },
    devServer: {
      // the port number that the dev server should serve on
      port: 8080,
      // serve index.html page in place of any 404 response (when using the HTML5 history API)
      historyApiFallback: true,
    },
    plugins: [
      // TODO: add the webpack module federation plugin for MFE
    ],
  };

  // Dev config -> merge of dev + common (dev overrides common)
  return merge(commonConfig, devConfig);
};
```

Add a `public/index.html` file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width" />
    <title>React MFE talk - Demo</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="../src/index.tsx"></script>
  </body>
</html>
```

Add a `src/index.tsx` file

```tsx
import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Container</h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));
```

## Creating header

- Create a header directory in the root of the repo
- Copy paste `config` `public` and `src` directory from container to header
- Copy paste `package.json` and `tsconfig.json` from container to header
- Run `npm i` on the header directory
- Change port in `webpack.dev.js` to 8001
