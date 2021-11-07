import MoviesList from "../MoviesList/MoviesList";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <MoviesList inSaved={true} />
      <Footer />
    </>
  );
}

export default SavedMovies;
