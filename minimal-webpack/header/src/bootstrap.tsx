import React from "react";
import { render } from "react-dom";

type DomRenderTarget = HTMLElement | null;

declare global {
  interface Window {
    containerContext: boolean;
    mountHeader: (el: DomRenderTarget) => void;
  }
}

const Header = () => {
  return <div style={{ backgroundColor: "aqua", height: "60px" }} />;
};

const mount = (el: DomRenderTarget) => {
  render(<Header />, el);
};

if (!window.containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
