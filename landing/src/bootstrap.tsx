import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

declare global {
  interface Window {
    containerContext: boolean;
  }
}

const mount = (el: Element | null) => {
  ReactDOM.render(<App />, el);
};

if (!window.containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
