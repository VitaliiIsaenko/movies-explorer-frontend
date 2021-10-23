import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <>
    <Header isLoggedIn={true}/>
    <section className="movies">
      <SearchForm />
      <MoviesCardList/>
    </section>
            <Footer/>
  </>
  );
}

export default Movies;
