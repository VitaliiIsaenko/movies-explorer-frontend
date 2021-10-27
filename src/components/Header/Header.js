import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import "../Button/Button.css";

function Header(props) {
  return (
    <header className={`header ${props.headerModificator}`}>
      <img className="header__logo" src={logo} alt="логотип" />
      {props.children}
    </header>
  );
}

export default Header;
