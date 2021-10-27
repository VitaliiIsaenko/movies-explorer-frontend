import "./TextInput.css";

function TextInput(props) {
  return (
    <div className="text-input">
      <label htmlFor={props.id} className="text-input__label">
        {props.label}
      </label>
      <input {...props} className="text-input__input" />
    </div>
  );
}

export default TextInput;
