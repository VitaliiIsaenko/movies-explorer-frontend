import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <section className="movies">
        <Header isLoggedIn={true}/>
      <SearchForm />
      <MoviesCardList/>
    </section>
  );
}

export default Movies;
