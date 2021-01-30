import React from "react";
import { render } from "react-dom";
import { History } from "history";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";

declare global {
  interface Window {
    containerContext: boolean;
  }
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 24px;
`;

const mount = (el: Element | null, history?: History) => {
  render(
    <Container>
      <h1>Header</h1>
      <ButtonContainer>
        <Button
          variant="outlined"
          style={{ color: "white", borderColor: "white" }}
          onClick={() => history?.push("/auth/login")}
        >
          Login
        </Button>
      </ButtonContainer>
    </Container>,
    el
  );
};

if (!window.containerContext) {
  mount(document.getElementById("root"));
}

export { mount };
