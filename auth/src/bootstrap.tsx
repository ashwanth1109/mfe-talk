import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

declare global {
  interface Window {
    containerContext: boolean;
  }
}

const mount = (el: HTMLElement | null) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    el
  );
};

if (!window.containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
