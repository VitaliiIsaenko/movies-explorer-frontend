import "./SearchForm.css";
import "../Button/Button.css";
import React from "react";
import Delimiter from "../Delimiter/Delimiter";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const [shortMoviesOnly, setShortMoviesOnly] = React.useState(false);
  const [searchText, setSearchText] = React.useState(props.search);
  function handleFilterChange(value) {
    setShortMoviesOnly(value);
  }

  function handleSearchTextChange(e) {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(searchText);
  }

  return (
    <section className="search">
      <form className="search__form"
        onSubmit={handleSubmit}>
        <div className="search__container">
          <input type="text" className="search__bar" placeholder="Фильм" required   
          value={searchText} 
          onChange={handleSearchTextChange}      />
          <button type="submit" className="button button_type_search">
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
