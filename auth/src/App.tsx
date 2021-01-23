import React, { useCallback, useEffect, useState } from "react";
import { Button, Card } from "@material-ui/core";
import styled from "@emotion/styled";
import { Switch, Route } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

  > button {
    flex: 1;
  }
`;

const AuthFormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const selectedStyle = { borderBottom: "2px solid dodgerblue", borderRadius: 0 };

const App = () => {
  const [val, setVal] = useState<number | null>(null);

  return (
    <Container>
      <Card
        style={{
          width: "550px",
          height: "700px",
          display: "flex",
          flexDirection: "column",
        }}
        variant="outlined"
      >
        <ButtonContainer>
          <Button
            onClick={() => setVal(0)}
            style={val === 0 ? selectedStyle : {}}
          >
            Login
          </Button>
          <Button
            onClick={() => setVal(1)}
            style={val === 1 ? selectedStyle : {}}
          >
            Register
          </Button>
        </ButtonContainer>
        <AuthFormContainer>
          <Switch>
            <Route path="/auth/login">
              <h1>Login</h1>
            </Route>
            <Route path="/auth/register">
              <h1>Register</h1>
            </Route>
          </Switch>
        </AuthFormContainer>
      </Card>
    </Container>
  );
};

export default App;
