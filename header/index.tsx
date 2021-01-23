import React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
};

render(<App />, document.getElementById("root"));
