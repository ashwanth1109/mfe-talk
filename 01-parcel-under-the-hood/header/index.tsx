import React from "react";
import { render } from "react-dom";

(() => {
  const mount = (id: string) => {
    render(
      <div style={{ height: "60px", background: "black" }} />,
      document.getElementById(id)
    );
  };

  window["mountHeader"] = mount;

  if (!window["container-context"]) {
    mount("root");
  }
})();
