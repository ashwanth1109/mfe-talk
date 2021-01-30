import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import App from "./App";
import { History, createBrowserHistory } from "history";

declare global {
  interface Window {
    containerContext: boolean;
  }
}

const mount = (el: HTMLElement | null, history: History) => {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    el
  );
};

if (!window.containerContext) {
  mount(document.getElementById("root"), createBrowserHistory());
}

export { mount };
