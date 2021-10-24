import { Link, useLocation } from "react-router-dom";
import "./MenuLink.css";
import "../Button/Button.css";

function MenuLink({link,hiddenOnBigScreen,name,onClick}) {
    const location = useLocation();

  return (
    <Link
      to={link}
      onClick={onClick}
      className={`button menu-link ${
        hiddenOnBigScreen
          ? "menu-link_type_hidden-on-big-screen"
          : ""
      } ${location.pathname === link ? "menu-link_type_active" : ""}`}
    >
      {name}
    </Link>
  );
}

export default MenuLink;
