import "./Error.css";

function Error(props) {
  return (<p className={`error ${props.text != null && props.text.length !== 0 ? 'error_shown':''}`}>{props.text}</p>);
}

export default Error;
