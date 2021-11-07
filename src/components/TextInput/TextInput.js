import "./TextInput.css";
import Error  from "../Error/Error";
function TextInput(props) {

  return (
    <div className="text-input">
      <label htmlFor={props.id} className="text-input__label">
        {props.label}
      </label>
      <input {...props} className="text-input__input" />
      <Error text={props.error} />
    </div>
  );
}

export default TextInput;
