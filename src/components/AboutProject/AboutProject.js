import "./AboutProject.css";
import SectionHeader from "../SectionHeader/SectionHeader";
function AboutProject() {
  return (
    <section className="about-project">
      <SectionHeader header="О проекте"/>
      <div className="about-project__facts">
        <div className="about-project__plan">
          <h3 className="about-project__plan-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__plan-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__plan">
          <h3 className="about-project__plan-header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__plan-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        </div>

        <div className="about-project__time">
          <div className="about-project__time-backend">
            <p className="about-project__time-backend-bar">1 неделя
            </p>
            <p className="about-project__time-text">Back-end</p>
          </div>
          <div className="about-project__time-frontend">
            <p className="about-project__time-frontend-bar">4 недели</p>
            <p className="about-project__time-text">Front-end</p>
          </div>
        </div>
    </section>
  );
}

export default AboutProject;
