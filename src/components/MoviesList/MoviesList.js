import SearchForm from "../SearchForm/SearchForm";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";
import React, { useCallback, useEffect } from "react";
import useWindowDimensions from "../../utils/useWindowDimensionsHook";
import "./MoviesList.css";
import Preloader from "../Preloader/Preloader";
import MovieCard from "../MovieCard/MovieCard";

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

  const getPageSize = useCallback(() => {
    if (width < 633) {
      return 1;
    } else if (width < 1136) {
      return 2;
    }
    return 3;
  }, [width]);

  useEffect(() => {
    setPageSize(getPageSize());
  }, [getPageSize]);

  useEffect(() => {
    if (!search) {
      return;
    }

    const filteredMovies = filterBy(inSaved ? savedMovies : movies, search);
    setMoviesFiltered(filteredMovies);
  }, [movies, search, savedMovies, inSaved]);

  useEffect(() => {
    //todo: consider extracting onlySaved case from this useEffect
    if (inSaved) {
      setShownMovies(filteredMovies);
    } else {
      const shownMovies = filteredMovies.slice(0, currentPage);
      setShownMovies(shownMovies);
    }
  }, [savedMovies, currentPage, pageSize, filteredMovies, inSaved]);

  useEffect(() => {
    Promise.all([api.getSavedMovies(), moviesApi.getMovies()])
      .then(([savedMovies, movies]) => {
        setError(false);
        setSavedMovies(savedMovies);
        setMovies(movies);

        //todo: extract to reuse on like/dislike
        movies.forEach((m) => {
          const savedMovie = savedMovies.find((sc) => sc.id === m.id);
          m._id = savedMovie ? savedMovie._id : null;
        });
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  function handleSearch(search) {
    setSearch(search);
    localStorage.setItem("search", search);
    setCurrentPage(pageSize);
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

  function filterBy(movies, searchText) {
    return movies.filter((m) => m.name.includes(searchText.trim()));
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
      <SearchForm onSubmit={handleSearch} search={search} />

      {!error && shownMovies.length !== 0 && (
        <section className="cards">
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
        </section>
      )}

      {shownMovies.length < filteredMovies.length && !inSaved && (
        <Preloader onClick={handlePreloaderClick} />
      )}

      {!error && filteredMovies.length === 0 && (
        <p className="movies__error">Ничего не найдено</p>
      )}

      {error && (
        <p className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}
    </>
  );
}
export default MoviesList;
