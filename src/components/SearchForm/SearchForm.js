import "./SearchForm.css";
import "../Button/Button.css";
import React from "react";
import Delimiter from "../Delimiter/Delimiter";

function SearchForm() {
  const [shortMoviesOnly, setShortMoviesOnly] = React.useState(false);
  function handleSwitchChange() {
    setShortMoviesOnly(!shortMoviesOnly);
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

        <label className="search__filter-container" htmlFor="filter">
          <input
            id="filter"
            type="checkbox"
            name="short-movies"
            className="search__filter-checkbox"
            onChange={handleSwitchChange}
            value={shortMoviesOnly}
          ></input>
          <span className="button search__filter-pseudo-checkbox">
              <div
                className='search__filter-switch'
              ></div>
          </span>
          <span className="search__filter-text">Короткометражки</span>

        </label>
      </form>
      <Delimiter />
    </section>
  );
}

export default SearchForm;
