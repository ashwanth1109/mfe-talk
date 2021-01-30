import React from "react";
import ReactDOM from "react-dom";

type DomRenderTarget = HTMLElement | null;
declare global {
  interface Window {
    containerContext: boolean;
    mountHeader: (el: DomRenderTarget) => void;
  }
}

const App = () => {
  return (
    <div>
      <h1>Container</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
