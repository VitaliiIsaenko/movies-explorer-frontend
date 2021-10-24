import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import '../Button/Button.css';
import MenuLink from "../MenuLink/MenuLink";

function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleMenuClick() {
    setIsOpen(true);
  }

  function handleCloseMenuClick() {
    setIsOpen(false);
  }

  //todo: get isLoggedIn from context
  return (
    <header
      className={`header ${
        !props.isLoggedIn ? "header_type_unauthorized" : ""
      }`}
    >
      <img className="header__logo" src={logo} alt="логотип Место" />
      {props.isLoggedIn ? (
        <>
          <nav
            className={`header__nav-container ${
              isOpen ? "header__nav-container_type_open" : ""
            }`}
          >
            <div
              className="header__background"
              onClick={handleCloseMenuClick}
            ></div>
            <ul
              className={`header__nav ${
                !props.isLoggedIn ? "header__nav_type_unauthorized" : ""
              }`}
            >
              <div className="header__container">
                <button
                  type="button"
                  className={`button header__close ${
                    isOpen ? "header__close_type_open" : ""
                  }`}
                  onClick={handleCloseMenuClick}
                ></button>
                <div className="header__nav-links">
                  <MenuLink
                    link="/"
                    name="Главная"
                    hiddenOnBigScreen={true}
                  />
                  <MenuLink link="/movies" name="Фильмы" />
                  <MenuLink
                    link="/saved-movies"
                    name="Сохранённые фильмы"
                  />
                </div>
                <Link className="button button_type_account" to="/profile">
                  <span>Аккаунт</span>
                  <div className="header__account-icon"> </div>
                </Link>
              </div>
            </ul>
          </nav>
          <button
            type="button"
            className="button header__burger"
            onClick={handleMenuClick}
          ></button>
        </>
      ) : (
        <>
          <nav className="header__nav-auth">
            <Link className="button button_type_register" to="/sign-up">
              Регистрация
            </Link>
            <Link className="button button_type_login" to="/sign-in">
              Войти
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
