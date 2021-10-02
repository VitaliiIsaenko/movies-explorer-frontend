import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Место" />
      <nav>
        <ul className="header__nav">
          <li>
            <Link className="button button_type_register" to="/sign-up">
              Регистрация
            </Link>
          </li>
          <li>
            <Link className="button button_type_login" to="/sign-in">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
