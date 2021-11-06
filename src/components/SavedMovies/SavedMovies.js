import MoviesList from "../MoviesList/MoviesList";

function SavedMovies() {
  return (
    <>
      <MoviesList inSaved={true}/>
    </>
  );
}

export default SavedMovies;
