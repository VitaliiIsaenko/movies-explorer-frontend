import link from "../../images/link.png";
import "../Button/Button.css";
import "./PortfolioLink.css";

function PortfolioLink(props) {
  return (
    <a
      className="button portfolio-link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{props.name}</span>
      <img className="portfolio-link__image" src={link} alt="Ссылка"></img>
    </a>
  );
}

export default PortfolioLink;
