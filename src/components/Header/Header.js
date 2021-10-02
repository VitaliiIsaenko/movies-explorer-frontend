import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import "./Header.css"

function Header(props) {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип Место" />
        <div className="header__nav">
        <Link className="button button_type_register" to="/sign-up">Регистрация</Link>
        <Link className="button button_type_login" to="/sign-in">Войти</Link>
        </div>
      </header>
    );
  }
  
  export default Header;
  