import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox(props) {
  const [isOn, setIsOn] = React.useState(props.isOn);
  function handleSwitchChange() {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
    props.onFilterChange(newIsOn);
  }

  return (
    <label className="filter-checkbox" htmlFor="filter">
      <input
        id="filter"
        type="checkbox"
        name="short-movies"
        className="filter-checkbox__input"
        onChange={handleSwitchChange}
        checked={isOn ?? null}
      ></input>
      <span className="button filter-checkbox__switch">
        <div className="filter-checkbox__switch-circle"></div>
      </span>
      <span className="filter-checkbox__text">{props.text}</span>
    </label>
  );
}

export default FilterCheckbox;
