import "./Form.css";
import Error from "../Error/Error";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e);
  }

  return (
    <form className="form" name={props.name} onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">{props.children}</fieldset>

      <SubmitButton text={props.buttonText} disabled={!props.isValid} error={props.error} />
    </form>
  );
}

export default Form;
