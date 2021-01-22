import React from "react";
import ReactDOM from "react-dom";

const Header = () => (
  <div id="header" style={{ height: "60px", background: "dodgerblue" }} />
);

ReactDOM.render(
  <div>
    <Header />
    <h1>Container</h1>
  </div>,
  document.getElementById("root")
);
