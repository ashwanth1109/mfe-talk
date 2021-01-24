import React from "react";
import { render } from "react-dom";
import Header from "./Header";

declare global {
  interface Window {
    containerContext: boolean;
  }
}

const mount = (el: Element | null) => {
  render(<Header />, el);
};

if (!window.containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
