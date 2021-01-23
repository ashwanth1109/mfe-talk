import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";

const mount = (el: HTMLElement | null, history: any) => {
  ReactDOM.render(
    <Router history={history}>
      <App history={history} />
    </Router>,
    el
  );
};

if (!((window as unknown) as CustomWindow).containerContext) {
  mount(document.getElementById("root"), createBrowserHistory());
}

export { mount };
