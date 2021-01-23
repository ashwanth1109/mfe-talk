import React from "react";
import { Card } from "@material-ui/core";
import styled from "@emotion/styled";
import { Switch, Route } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: slateblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cardStyles = {
  width: "550px",
  height: "700px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const App = () => {
  return (
    <Container>
      <Card style={cardStyles} variant="outlined">
        <Switch>
          <Route path="/auth/login">
            <h1>Login</h1>
          </Route>
          <Route path="/auth/register">
            <h1>Register</h1>
          </Route>
        </Switch>
      </Card>
    </Container>
  );
};

export default App;
