import "./Form.css";

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e);
  }

  return (
    <form className="form" name={props.name} onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">{props.children}</fieldset>
      <button className="button button_type_submit" type="submit">
        {props.buttonText}
      </button>
    </form>
  );
}

export default Form;
