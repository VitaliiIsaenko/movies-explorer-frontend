import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";
import React, { useEffect } from "react";
import useWindowDimensions from "../../utils/useWindowDimensionsHook";

function Movies(props) {
  const [savedCards, setSavedCards] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [cardsToDisplay, setCardsToDisplay] = React.useState([]);
  const [cardsFiltered, setCardsFiltered] = React.useState([]);
  const [error, setError] = React.useState(false);
  const { width } = useWindowDimensions();
  const [pageSize, setPageSize] = React.useState(columnSize());

  useEffect(() => {
    setPageSize(columnSize());
  }, [width]);

  useEffect(() => {
    api
      .getSavedMovies()
      .then((savedMovies) => {
        setSavedCards(savedMovies);
      })
      .catch((e) => console.log(e));

    const savedCardsJson = localStorage.getItem("cards");
    if (savedCardsJson == null) {
      return;
    }
    const savedCards = JSON.parse(savedCardsJson);
    setCards(savedCards.all);
    setCardsFiltered(savedCards.filtered);
    setCardsToDisplay(savedCards.displayed);
  }, []);

  function columnSize() {
    if (width > 1136) {
      return 3;
    }
    if (width > 633) {
      return 2;
    }
    return 1;
  }

  function handleSearch(searchText) {
    if (cards.length !== 0) {
      updateFilteredCards(cards, searchText);
    } else {
      moviesApi
        .getMovies()
        .then((movies) => {
          setError(false);

          movies.forEach((m) => {
            const savedCard = savedCards.find((sc) => sc.movieId === m.id);
            m._id = savedCard ? savedCard._id : null;
          });
          setCards(movies);
          updateFilteredCards(movies, searchText);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        });
    }
  }

  function updateFilteredCards(cards, searchText) {
    const filteredCards = filterBy(cards, searchText);
    setCardsFiltered(filteredCards);
    const displayedCards = filteredCards.slice(0, pageSize);
    setCardsToDisplay(displayedCards);

    localStorage.setItem(
      "cards",
      JSON.stringify({
        all: cards,
        filtered: filteredCards,
        displayed: displayedCards,
      })
    );
  }

  function handleCardRemove(card) {
    setCards(cards.filter((c) => c.movieId !== card.movieId));
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
    if (cardsToDisplay.length === cardsFiltered.length) {
      return;
    }
    const newCardsToDisplay = [
      ...cardsToDisplay,
      ...cardsFiltered.slice(
        cardsToDisplay.length,
        cardsToDisplay.length + pageSize
      ),
    ];
    setCardsToDisplay(newCardsToDisplay);
    localStorage.setItem(
      "cards",
      JSON.stringify({
        all: cards,
        filtered: cardsFiltered,
        displayed: newCardsToDisplay,
      })
    );
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <section className="movies">
        <SearchForm onSubmit={handleSearch} />

        {!error && cardsToDisplay.length !== 0 && (
          <MoviesCardList
            cards={cardsToDisplay}
            onCardRemove={handleCardRemove}
            onCardLike={handleCardLike}
          />
        )}

        {cardsToDisplay.length < cardsFiltered.length && (
          <Preloader onClick={handlePreloaderClick} />
        )}

        {!error && cardsFiltered.length === 0 && (
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
