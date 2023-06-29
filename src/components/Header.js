import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import TerminalSharpIcon from "@mui/icons-material/TerminalSharp";

const Header = () => {
  const Container = styled(AppBar)`
    height: auto;
    position: static;
  `;
  return (
    <Container>
      <Toolbar className="header">
        <TerminalSharpIcon style={{ fontSize: "36px" }} />
        <span>CodePen</span>
      </Toolbar>
    </Container>
  );
};

export default Header;
