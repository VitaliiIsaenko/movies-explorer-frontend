import { Link, useLocation } from "react-router-dom";
import "./MenuLink.css";
import "../Button/Button.css";

function MenuLink(props) {
    const location = useLocation();

  return (
    <Link
      to={props.link}
      className={`button menu-link ${
        props.hiddenOnBigScreen
          ? "menu-link_type_hidden-on-big-screen"
          : ""
      } ${location.pathname === props.link ? "menu-link_type_active" : ""}`}
    >
      {props.name}
    </Link>
  );
}

export default MenuLink;
