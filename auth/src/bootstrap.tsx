import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const mount = (el: HTMLElement | null) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    el
  );
};

if (!((window as unknown) as CustomWindow).containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
