import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
};

export default Header;
