import "./Navigation.css";
import { Link } from "react-router-dom";
import React from "react";
import MenuLink from "../MenuLink/MenuLink";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleMenuClick() {
    setIsOpen(true);
  }

  function handleCloseMenuClick() {
    setIsOpen(false);
  }

  return (
    <>
      <nav className={`navigation ${isOpen ? "navigation_open" : ""}`}>
        <div
          className="navigation__background"
          onClick={handleCloseMenuClick}
        ></div>
        <ul className="navigation__list">
          <div className="navigation__container">
            <button
              type="button"
              className={`button  button_type_close ${
                isOpen ? "button button_type_close-visible" : ""
              }`}
              onClick={handleCloseMenuClick}
            ></button>
            <div className="navigation__list-links">
              <MenuLink
                onClick={handleCloseMenuClick}
                link="/"
                name="Главная"
                hiddenOnBigScreen={true}
              />
              <MenuLink
                link="/movies"
                name="Фильмы"
                onClick={handleCloseMenuClick}
              />
              <MenuLink
                onClick={handleCloseMenuClick}
                link="/saved-movies"
                name="Сохранённые фильмы"
              />
            </div>
            <Link
              className="button button_type_account"
              to="/profile"
              onClick={handleCloseMenuClick}
            >
              <span>Аккаунт</span>
              <div className="header__account-icon"> </div>
            </Link>
          </div>
        </ul>
      </nav>
      <button
        type="button"
        className="button button_type_burger"
        onClick={handleMenuClick}
      ></button>
    </>
  );
}

export default Navigation;
