import "./SearchForm.css";

function SearchForm() {
  console.log('hey');
  return (
    <section className="search">
      <button type="text"></button>
      <button type="button">Найти</button>
      <label className="language-options__label" htmlFor="ru">
        <input
          type="radio"
          className="language-options__radio"
          name="language"
          id="ru"
          value="ru"
          checked
        />
        <span className="language-options__pseudo-radio link">Ru</span>
      </label>
    </section>
  );
}

export default SearchForm;
