import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const mount = (el: Element | null) => {
  ReactDOM.render(<Header />, el);
};

if (!((window as unknown) as CustomWindow).containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
