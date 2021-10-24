import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { savedCards } from "../../utils/constants";
import Navigation from "../Navigation/Navigation";

function SavedMovies() {
  return (
    <>
      <Header> 
        <Navigation/>
      </Header>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList cards={savedCards} savedCards={true} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
