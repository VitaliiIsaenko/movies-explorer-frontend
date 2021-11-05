import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
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
        <Movies savedCards={true} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
