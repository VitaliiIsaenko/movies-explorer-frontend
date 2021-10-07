import { Link } from "react-router-dom";
import "./MenuLink.css";
import "../Button/Button.css";

function MenuLink(props) {
  return (
    <Link
      to={props.link}
      className={`button menu-link ${
        props.hiddenOnBigScreen
          ? "menu-link_type_hidden-on-big-screen"
          : ""
      } ${props.isActive ? "menu-link_type_active" : ""}`}
    >
      {props.name}
    </Link>
  );
}

export default MenuLink;
