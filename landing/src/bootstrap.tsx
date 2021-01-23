import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el: Element | null) => {
  ReactDOM.render(<App />, el);
};

if (!((window as unknown) as CustomWindow).containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
