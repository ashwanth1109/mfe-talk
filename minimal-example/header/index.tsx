import React from "react";
import { render } from "react-dom";

const Header = () => (
  <div style={{ height: "60px", background: "dodgerblue" }} />
);

(() => {
  const mount = (id: string) => {
    render(<Header />, document.getElementById(id));
  };

  window["mountHeader"] = mount;

  if (!window["container-context"]) {
    mount("root");
  }
})();
