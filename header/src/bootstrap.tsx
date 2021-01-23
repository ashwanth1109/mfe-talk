import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const mount = (el: Element | null, history: any) => {
  ReactDOM.render(<Header history={history} />, el);
};

if (!((window as unknown) as CustomWindow).containerContext) {
  mount(document.getElementById("root"), null);
}

export { mount };
