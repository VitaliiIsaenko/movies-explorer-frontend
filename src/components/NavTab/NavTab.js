import "./NavTab.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <>
      <header className="nav-tab">
        <img className="nav-tab__logo" src={logo} alt="логотип" />
        <nav className="nav-tab__auth">
          <Link className="button button_type_register" to="/sign-up">
            Регистрация
          </Link>
          <Link className="button button_type_login" to="/sign-in">
            Войти
          </Link>
        </nav>
      </header>
    </>
  );
}

export default NavTab;
