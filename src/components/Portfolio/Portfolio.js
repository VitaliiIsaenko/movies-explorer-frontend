import "./Portfolio.css";
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import Delimiter from '../Delimiter/Delimiter';
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <PortfolioLink name="Статичный сайт" link="https://www.google.com"></PortfolioLink>
      <Delimiter/>
      <PortfolioLink name="Адаптивный сайт" link="https://www.google.com"></PortfolioLink>
      <Delimiter/>
      <PortfolioLink name="Одностраничное приложение" link="https://www.google.com"></PortfolioLink>
    </section>
  );
}

export default Portfolio;
