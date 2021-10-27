import "./Portfolio.css";
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import Delimiter from '../Delimiter/Delimiter';
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <PortfolioLink name="Статичный сайт" link="https://github.com/VitaliiIsaenko/how-to-learn"/>
      <Delimiter/>
      <PortfolioLink name="Адаптивный сайт" link="https://github.com/VitaliiIsaenko/russian-travel"/>
      <Delimiter/>
      <PortfolioLink name="Одностраничное приложение" link="https://github.com/VitaliiIsaenko/react-mesto-api-full"/>
    </section>
  );
}

export default Portfolio;
