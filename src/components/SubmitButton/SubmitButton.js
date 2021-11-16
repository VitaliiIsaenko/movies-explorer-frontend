import "../Button/Button.css";
import Error from "../Error/Error";
import "./SubmitButton.css";

function SubmitButton(props) {
  return (
    <div className="submit-button">
      <Error text={props.error} />
      <button
        className="button button_type_submit"
        disabled={props.disabled}
        type="submit"
      >
        {props.text}
      </button>
    </div>
  );
}

export default SubmitButton;
