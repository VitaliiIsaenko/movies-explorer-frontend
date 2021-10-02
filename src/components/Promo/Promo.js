import promo from "../../images/promo.svg";
import "./Promo.css";
import "../Button/Button.css";

function Promo() {
  return (<>
      <section className="promo">
      <div className="promo__underlay"></div>

        <div className="promo__info">
          <h1 className="promo__description">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__cta">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button type="button" className="button button_type_promo">
            Узнать больше
          </button>
        </div>
        <img className="promo__img" src={promo} alt="Промо Веб" />
      </section>
  </>);
}

export default Promo;
