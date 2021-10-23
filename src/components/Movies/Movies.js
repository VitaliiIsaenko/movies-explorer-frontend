import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import { cards } from "../../utils/constants";

function Movies(props) {
  return (
    <>
      <Header isLoggedIn={true} />
      <section className="movies">
        <SearchForm />
        <MoviesCardList cards={cards} />
        <Preloader />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
