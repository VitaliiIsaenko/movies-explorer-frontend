import "./SectionHeader.css";

function SectionHeader(props) {
  return (
    <>
      <h2 className="section-header__header">{props.header}</h2>
      <hr className="section-header__delimiter"></hr>
    </>
  );
}

export default SectionHeader;
