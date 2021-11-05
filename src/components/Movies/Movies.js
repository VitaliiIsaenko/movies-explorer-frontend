import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";
import React, { useCallback, useEffect } from "react";
import useWindowDimensions from "../../utils/useWindowDimensionsHook";
import { savedCards } from "../../utils/constants";

function Movies(props) {
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

    const filteredMovies = filterBy(movies, search);
    setMoviesFiltered(filteredMovies);
  }, [movies, search]);

  useEffect(() => {
    //todo: consider extracting onlySaved case from this useEffect
    if (props.onlySaved) {
      setShownMovies(savedMovies);
    } else {
      const shownMovies = filteredMovies.slice(0, currentPage);
      setShownMovies(shownMovies);
    }
  }, [savedMovies, currentPage, pageSize, filteredMovies, props.onlySaved]);

  useEffect(() => {
    Promise.all([api.getSavedMovies(), moviesApi.getMovies()])
      .then(([savedMovies, movies]) => {
        setError(false);
        setSavedMovies(savedMovies);
        setMovies(movies);

        //todo: extract to reuse on like/dislike
        movies.forEach((m) => {
          const savedMovie = savedMovies.find((sc) => sc.movieId === m.id);
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

  function handleCardRemove(card) {
    setMovies(movies.filter((c) => c.movieId !== card.movieId));
  }

  function handleCardLike(card, isLiked) {
    if (isLiked) {
      api.postMovie(card);
    } else {
      api.deleteMovie(card._id);
    }
  }

  function filterBy(cards, searchText) {
    return cards.filter((c) => c.name.includes(searchText.trim()));
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
      <Header>
        <Navigation />
      </Header>

      <section className="movies">
        <SearchForm onSubmit={handleSearch} search={search} />

        {!error && shownMovies.length !== 0 && (
          <MoviesCardList
            cards={shownMovies}
            onCardRemove={handleCardRemove}
            onCardLike={handleCardLike}
          />
        )}

        {shownMovies.length < filteredMovies.length && !props.savedCards && (
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
      </section>

      <Footer />
    </>
  );
}

export default Movies;
