import promo from "../../images/promo.svg";
import "./Promo.css";
import "../Button/Button.css";
import { Link } from "react-router-dom";

function Promo() {
  return (
    <>
      <section className="promo">
        <div className="promo__info">
          <h1 className="promo__description">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__cta">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className="button button_type_promo" to="sign-in">
            Узнать больше
          </Link>
        </div>
        <img className="promo__img" src={promo} alt="Промо Веб" />
      </section>
    </>
  );
}

export default Promo;
