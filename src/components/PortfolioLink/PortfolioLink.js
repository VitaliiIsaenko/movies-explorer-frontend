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
      <div className="portfolio-link__image"></div>
    </a>
  );
}

export default PortfolioLink;
