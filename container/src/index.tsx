import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div id="header-mfe">Header mfe did not load.</div>
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <div id="auth-mfe">Auth mfe did not load.</div>
          </Route>
          <Route path="/dashboard">
            <div id="dashboard-mfe">Dashboard mfe did not load.</div>
          </Route>
          <Route path="/">
            <div id="landing-mfe">Landing mfe did not load.</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

render(<App />, document.getElementById("root"));
