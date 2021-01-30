import React, { useEffect, useRef } from "react";
import { render } from "react-dom";

type DomRenderTarget = HTMLElement | null;

declare global {
  interface Window {
    containerContext: boolean;
    mountHeader: (el: DomRenderTarget) => void;
  }
}

const Container = () => {
  return (
    <div>
      <h1>Container</h1>
    </div>
  );
};

render(<Container />, document.getElementById("root"));
