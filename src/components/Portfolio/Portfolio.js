import "./Portfolio.css";
import PortfolioLink from '../PortfolioLink/PortfolioLink';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      {/* extract */}
      <PortfolioLink name="Статичный сайт" link="www.google.com"></PortfolioLink>
      <hr className="portfolio__link-delimiter"/>
      <PortfolioLink name="Адаптивный сайт" link="www.google.com"></PortfolioLink>
      <hr className="portfolio__link-delimiter"/>
      <PortfolioLink name="Одностраничное приложение" link="www.google.com"></PortfolioLink>
    </section>
  );
}

export default Portfolio;
