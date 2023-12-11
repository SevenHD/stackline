import React from "react";
import { ReactComponent as Logo } from "../assets/stackline_logo.svg";
import "../css/Header.css";

function Header() {
  return (
    <div id="header">
      <Logo id="logo" />
    </div>
  );
}

export default Header;
