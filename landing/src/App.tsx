import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #282c34;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <h1>Landing</h1>
    </Container>
  );
};

export default App;
