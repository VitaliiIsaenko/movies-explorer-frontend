import "./TextInput.css";
import Error  from "../Error/Error";
function TextInput(props) {

  return (
    <div className="text-input">
      <label htmlFor={props.id} className="text-input__label">
        {props.label}
      </label>
      <input {...props} className={`text-input__input ${props.error != null && props.error.length !== 0 ? 'text-input__input_invalid':''}`} />
      <Error text={props.error} />
    </div>
  );
}

export default TextInput;
