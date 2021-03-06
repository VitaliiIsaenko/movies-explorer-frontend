import SearchForm from "../SearchForm/SearchForm";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";
import React, { useEffect } from "react";
import useWindowDimensions from "../../utils/useWindowDimensionsHook";
import "./MoviesList.css";
import Preloader from "../Preloader/Preloader";
import MovieCard from "../MovieCard/MovieCard";
import { getColumnSize } from "../../utils/moviesPagination";
import { filterBy } from "../../utils/moviesFilter";
import Error from "../Error/Error";

function MoviesList({ inSaved }) {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);

  const [shownMovies, setShownMovies] = React.useState([]);
  const [filteredMovies, setMoviesFiltered] = React.useState([]);

  const [error, setError] = React.useState(false);
  const { width } = useWindowDimensions();

  const [pageSize, setPageSize] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(
    parseInt(localStorage.getItem("currentPage")) || 0
  );

  const [search, setSearch] = React.useState(
    localStorage.getItem("search") || ""
  );
  const [onlyShort, setOnlyShort] = React.useState(
    localStorage.getItem("onlyShort") === "true"
  );

  function getMovies() {
    return new Promise((resolve, reject) => {
      const movies = JSON.parse(localStorage.getItem("movies"));
      if (movies) {
        resolve(movies);
      } else {
        moviesApi
          .getMovies()
          .then((data) => {
            localStorage.setItem("movies", JSON.stringify(data));
            resolve(data);
          })
          .catch((e) => reject(e));
      }
    });
  }

  useEffect(() => {
    Promise.all([api.getSavedMovies(), getMovies()])
      .then(([savedMovies, movies]) => {
        setError(false);
        setSavedMovies(savedMovies);

        movies.forEach((m) => {
          const savedMovie = savedMovies.find((sc) => sc.id === m.id);
          m._id = savedMovie ? savedMovie._id : null;
        });

        setMovies(movies);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setPageSize(getColumnSize(width));
  }, [width]);

  useEffect(() => {
    if (!search) {
      return;
    }

    const filteredMovies = filterBy(
      inSaved ? savedMovies : movies,
      search,
      onlyShort
    );
    setMoviesFiltered(filteredMovies);
  }, [movies, search, onlyShort, savedMovies, inSaved]);

  useEffect(() => {
    if (inSaved) {
      setShownMovies(filteredMovies);
    } else {
      const shownMovies = filteredMovies.slice(0, currentPage);
      setShownMovies(shownMovies);
    }
  }, [savedMovies, currentPage, pageSize, filteredMovies, inSaved]);

  function handleSearch(search, onlyShort) {
    handleFilterChange(onlyShort);

    setSearch(search);
    localStorage.setItem("search", search);

    setCurrentPage(pageSize);
    localStorage.setItem("currentPage", pageSize);
  }

  function handleFilterChange(onlyShort) {
    setOnlyShort(onlyShort);
    localStorage.setItem("onlyShort", onlyShort);
  }

  function handleMovieDislike(movie) {
    if (movie._id === null) {
      return;
    }
    api
      .deleteMovie(movie._id)
      .then(() => {
        updateSavedMovieId(movie.id, null);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieLike(movie) {
    if (savedMovies.find((m) => m.id === movie.id)) {
      return;
    }
    api.postMovie(movie).then((r) => {
      movie._id = r._id;
      updateSavedMovieId(movie.id, movie._id);
    });
  }

  function updateSavedMovieId(movieId, savedMovieId) {
    movies.find((m) => m.id === movieId)._id = savedMovieId;
    const savedMovie = savedMovies.find((m) => m.id === movieId);
    if (savedMovie !== undefined) {
      savedMovie._id = savedMovieId;
    }

    setMovies(movies);
    setSavedMovies(savedMovies.filter((c) => c._id !== null));
  }

  function handlePreloaderClick() {
    if (shownMovies.length === filteredMovies.length) {
      return;
    }
    const newCurrentPage = currentPage + pageSize;
    localStorage.setItem("currentPage", newCurrentPage);
    setCurrentPage(newCurrentPage);
  }

  return (
    <>
      <SearchForm
        onSubmit={handleSearch}
        search={search}
        onlyShort={onlyShort}
        onFilterChange={handleFilterChange}
      />

      <section className="cards">
        {!error && shownMovies.length !== 0 && (
          <ul className="card-list">
            {shownMovies.map((c) => {
              return (
                <li key={c.id}>
                  <MovieCard
                    card={c}
                    inSaved={inSaved}
                    onCardDislike={handleMovieDislike}
                    onCardLike={handleMovieLike}
                  />
                </li>
              );
            })}
          </ul>
        )}
        {shownMovies.length < filteredMovies.length && !inSaved && (
          <Preloader onClick={handlePreloaderClick} />
        )}

        <div className="card__errors">
          {!error && search.length !== 0 && filteredMovies.length === 0 && (
            <Error text="???????????? ???? ??????????????" />
          )}

          {error && (
            <Error
              text="???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ??????????????????????
          ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????"
            />
          )}
        </div>
      </section>
    </>
  );
}
export default MoviesList;
