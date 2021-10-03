import SectionHeader from "../SectionHeader/SectionHeader";
import photo from "../../images/photo.jpg";
import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <SectionHeader header="Студент" />
      <div className="about-me__all">
        <div className="about-me__info">
          <h3 className="about-me__header">Виталий</h3>
          <p className="about-me__subheading">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__links">
            <li>
              <a
                className="button button_type_link"
                href="https://www.facebook.com/vitaliiisaenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="button button_type_link"
                href="https://github.com/VitaliiIsaenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__photo"
          src={photo}
          alt="Портретное фото"
        ></img>
      </div>
    </section>
  );
}

export default AboutMe;
