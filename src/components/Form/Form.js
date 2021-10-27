import "./Form.css";

function Form(props) {
  return (
    <form className="form" name={props.name} onSubmit={props.onSubmit}>
      <fieldset className="form__fieldset">{props.children}</fieldset>
      <button className="button button_type_submit" type="submit">
        {props.buttonText}
      </button>
    </form>
  );
}

export default Form;
