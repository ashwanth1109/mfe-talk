import React from "react";
import styled from "@emotion/styled";
import Header from "./remote_modules/header";
import { Route, Switch } from "react-router-dom";
import Landing from "./remote_modules/landing";
import Auth from "./remote_modules/auth";

const PageBody = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
`;

const App = () => {
  return (
    <div>
      <Header />
      <PageBody>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </PageBody>
    </div>
  );
};

export default App;
