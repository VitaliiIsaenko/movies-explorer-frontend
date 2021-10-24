import "./TextInput.css";

function TextInput(props) {
  return (
    <div className="text-input">
      <label for="name" className="text-input__label">
        {props.label}
      </label>
      <input type="text" {...props} className="text-input__input" id="name" />
    </div>
  );
}

export default TextInput;
