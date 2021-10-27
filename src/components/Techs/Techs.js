import SectionHeader from "../SectionHeader/SectionHeader";
import "./Techs.css";
import Label from "../Label/Label";

function Techs() {
  return (
    <section className="techs">
      <SectionHeader header="Технологии" />
      <h3 className="techs__header">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__labels">
        <li>
          <Label name="HTML" />
        </li>
        <li>
          <Label name="CSS" />
        </li>
        <li>
          <Label name="JS" />
        </li>
        <li>
          <Label name="React" />
        </li>
        <li>
          <Label name="Git" />
        </li>
        <li>
          <Label name="Express.js" />
        </li>
        <li>
          <Label name="mongoDB" />
        </li>
      </ul>
    </section>
  );
}

export default Techs;
