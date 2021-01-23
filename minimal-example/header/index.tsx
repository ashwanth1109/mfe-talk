import React from "react";
import { render } from "react-dom";

type DomRenderTarget = HTMLElement | null;

declare global {
  interface Window {
    containerContext: boolean;
    mountHeader: (el: DomRenderTarget) => void;
  }
}

const Header = () => (
  <div style={{ height: "60px", background: "dodgerblue" }} />
);

render(<Header />, document.getElementById("root"));
