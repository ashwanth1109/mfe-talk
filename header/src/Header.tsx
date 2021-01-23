import React from "react";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

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

const Header = () => {
  return (
    <Container>
      <h1>Header</h1>
      <ButtonContainer>
        <Button
          variant="outlined"
          style={{ color: "white", borderColor: "white" }}
          onClick={() => null}
        >
          Login
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
