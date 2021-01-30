import React from "react";
import styled from "@emotion/styled";
import Header from "./remote_modules/header";
import { Route, Switch } from "react-router-dom";

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
          <Route path="/">
            <h1>Container</h1>
          </Route>
        </Switch>
      </PageBody>
    </div>
  );
};

export default App;
