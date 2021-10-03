import "./Footer.css";
import "../Button/Button.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__about-template">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <hr className="footer__delimiter"></hr>
      <div className="footer__bottom">
        <p className="footer__copy">&copy; 2021</p>
        <nav>
          <ul className="footer__links">
            <li>
              <a
                className="button button_type_menu-link"
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className="button button_type_menu-link"
                href="https://github.com/VitaliiIsaenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="button button_type_menu-link"
                href="https://www.facebook.com/vitaliiisaenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
