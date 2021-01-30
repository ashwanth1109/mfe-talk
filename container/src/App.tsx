import React, { lazy } from "react";
import styled from "@emotion/styled";
import Header from "./remote_modules/header";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";

const Landing = lazy(() => import("./remote_modules/landing"));
const Auth = lazy(() => import("./remote_modules/auth"));

const PageBody = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
`;

const App = () => {
  return (
    <div>
      <Header />
      <PageBody>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Suspense>
      </PageBody>
    </div>
  );
};

export default App;
