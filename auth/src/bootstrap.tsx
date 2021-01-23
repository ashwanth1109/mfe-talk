import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const mount = (el: Element) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    el
  );
};

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#auth-module-root");

  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
