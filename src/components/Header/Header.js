import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  function getNavigation() {
    if (!props.isLoggedIn) {
      return [
        <Link className="button button_type_register" to="/sign-up">
          Регистрация
        </Link>,
        <Link className="button button_type_login" to="/sign-in">
          Войти
        </Link>,
      ];
    }
    return [
      <Link className="button button_type_header-link" to="/movies">
        Фильмы
      </Link>,
      <Link className="button button_type_header-link" to="/saved-movies">
        Сохранённые фильмы
      </Link>,
      <Link className="button button_type_account" to="/profile">
        <span>Аккаунт</span>
        <div className="header__account-icon"> </div>
      </Link>,
    ];
  }

  return (
    <header
      className={`header ${
        !props.isLoggedIn ? "header_type_unauthorized" : ""
      }`}
    >
      <img className="header__logo" src={logo} alt="логотип Место" />
      <nav>
        <ul className={`header__nav ${!props.isLoggedIn ? 'header__nav_type_unauthorized' : ''}`}>
          {getNavigation().map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
