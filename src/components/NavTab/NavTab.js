import "./NavTab.css";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="nav-tab">
      <Link className="button button_type_register" to="/sign-up">
        Регистрация
      </Link>
      <Link className="button button_type_login" to="/sign-in">
        Войти
      </Link>
    </nav>
  );
}

export default NavTab;
