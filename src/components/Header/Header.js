import React from 'react';
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleMenuClick() {
    setIsOpen(true);
  }

  function handleCloseMenuClick() {
    setIsOpen(false);
  }

  return (
    <header
      className={`header ${
        !props.isLoggedIn ? "header_type_unauthorized" : ""
      }`}
    >
      <img className="header__logo" src={logo} alt="логотип Место" />
      <nav className={`header__nav-container ${isOpen ? 'header__nav-container_type_open' : ''}`}>
        <div className="header__background" onClick={handleCloseMenuClick}></div>
        <ul
          className={`header__nav ${
            !props.isLoggedIn ? "header__nav_type_unauthorized" : ""
          }`}
        >
          <div className="header__container">
            <button type="button" className="header__close" onClick={handleCloseMenuClick}> </button>
            {props.isLoggedIn ? (
              <>
                <div className="header__nav-links">
                  <Link className="button button_type_header-link header__nav-link-main" to="/">Главная</Link>
                  <Link className="button button_type_header-link" to="/movies">
                    Фильмы
                  </Link>
                  <Link
                    className="button button_type_header-link"
                    to="/saved-movies"
                  >
                    Сохранённые фильмы
                  </Link>
                </div>
                <Link className="button button_type_account" to="/profile">
                  <span>Аккаунт</span>
                  <div className="header__account-icon"> </div>
                </Link>
              </>
            ) : (
              <>
                <Link className="button button_type_register" to="/sign-up">
                  Регистрация
                </Link>
                <Link className="button button_type_login" to="/sign-in">
                  Войти
                </Link>
              </>
            )}
          </div>
        </ul>
      </nav>
      <button type="button" className="header__burger" onClick={handleMenuClick}></button>
    </header>
  );
}

export default Header;
