import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { savedCards } from "../../utils/constants";

function SavedMovies() {
  return (
    <>
      <Header isLoggedIn={true} />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList cards={savedCards} savedCards={true} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
