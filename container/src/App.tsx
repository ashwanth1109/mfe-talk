import React, { lazy, Suspense } from "react";
import Header from "./remote_modules/Header";
import styled from "@emotion/styled";
import { Route, Switch, useHistory } from "react-router-dom";

const PageBody = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
`;

const LandingLazy = lazy(() => import("./remote_modules/Landing"));
const AuthLazy = lazy(() => import("./remote_modules/Auth"));

const App = () => {
  const history = useHistory();

  return (
    <div>
      <Header history={history} />
      <PageBody>
        <Suspense fallback={<div>Loading . . .</div>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy history={history} />
            </Route>
            <Route path="/">
              <LandingLazy />
            </Route>
          </Switch>
        </Suspense>
      </PageBody>
    </div>
  );
};

export default App;
