import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox({ onFilterChange, text }) {
  function handleSwitchChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <label className="filter-checkbox" htmlFor="filter">
      <input
        id="filter"
        type="checkbox"
        name="short-movies"
        className="filter-checkbox__input"
        onChange={handleSwitchChange}
      ></input>
      <span className="button filter-checkbox__switch">
        <div className="filter-checkbox__switch-circle"></div>
      </span>
      <span className="filter-checkbox__text">{text}</span>
    </label>
  );
}

export default FilterCheckbox;
