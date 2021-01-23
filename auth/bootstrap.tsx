import React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: slateblue;
`;

const AuthContainer = styled.div`
  width: 550px;
  height: 700px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => <h1>Login</h1>;

const Register = () => <h1>Register</h1>;

const App = () => {
  return (
    <Container>
      <AuthContainer>
        <Login />
      </AuthContainer>
    </Container>
  );
};

render(<App />, document.getElementById("root"));
