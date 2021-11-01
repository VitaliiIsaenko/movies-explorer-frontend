import "./Preloader.css";
import "../Button/Button.css";

function Preloader(props) {
  return (
    <section className="preloader">
      <button onClick={props.onClick} type="button" className="button button_type_more-cards">
        Ещё
      </button>
    </section>
  );
}

export default Preloader;
