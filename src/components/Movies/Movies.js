import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import { cards } from "../../utils/constants";
import Navigation from "../Navigation/Navigation";

function Movies(props) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
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
