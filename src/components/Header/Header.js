import logo from "../../images/logo.png";

function Header(props) {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип Место" />
        <div className="header__nav">{props.children}</div>
      </header>
    );
  }
  
  export default Header;
  