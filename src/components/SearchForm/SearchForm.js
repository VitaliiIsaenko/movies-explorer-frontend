import "./SearchForm.css";
import "../Button/Button.css";
import React from 'react';
import Delimiter from "../Delimiter/Delimiter";

function SearchForm() {
  const [isOn, setIsOn] = React.useState(false);
  function handleSwitchClick(){
    setIsOn(!isOn);
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
            onChange={handleSwitchClick}
            checked={isOn}
          ></input>
          <div className="search__filter">
            <div className="button search__filter-pseudo-checkbox">
              <div className={`search__filter-switch ${isOn ?'search__filter-switch_type_on':''}`}></div>
            </div>
            <span className="search__filter-text">Короткометражки</span>
          </div>
        </label>
        <input
          id="filter"
          type="checkbox"
          name="short-movies"
          className="test-checkbox"
        ></input>

        <label className="language-options__label" htmlFor="ru">
          <input
            type="radio"
            className="language-options__radio"
            name="language"
            id="ru"
            value="ru"
            checked
            onChange={console.log("hey")}
          />
          <span className="language-options__pseudo-radio link">Ru</span>
        </label>
      </form>
      <Delimiter />
    </section>
  );
}

export default SearchForm;
