import "./SearchForm.css";
import "../Button/Button.css";
import React from "react";
import Delimiter from "../Delimiter/Delimiter";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const [shortMoviesOnly, setShortMoviesOnly] = React.useState(false);
  function handleFilterChange(value) {
    setShortMoviesOnly(value);
  }

  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <input type="text" className="search__bar" placeholder="Фильм" />
          <button type="button" className="button button_type_search">
            Найти
          </button>
        </div>
        <FilterCheckbox onFilterChange={handleFilterChange} text="Короткометражки"/>
      </form>
      <Delimiter />
    </section>
  );
}

export default SearchForm;
