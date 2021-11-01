import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import api from "../../utils/MoviesApi";
import React, { useEffect } from "react";
import useWindowDimensions from "../../utils/useWindowDimensionsHook";

function Movies(props) {
  const [cards, setCards] = React.useState([]);
  const [cardsToDisplay, setCardsToDisplay] = React.useState([]);
  const [cardsFiltered, setCardsFiltered] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(3);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setPageSize(columnSize);
  }, [width]);

  function columnSize() {
    if (width > 1136 ) {
      return 3;
    }
    if (width > 633) {
      return 2;
    }
    return 1;
    // if (width > )
  }

  function handleSearch(searchText) {
    if (cards.length !== 0) {
      updateFilteredCards(cards, searchText);
    } else {
      api
        .getMovies()
        .then((result) => {
          setError(false);
          setCards(result);
          updateFilteredCards(result, searchText);
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
    setCardsToDisplay(filteredCards.slice(0, pageSize));
  }

  function handleCardRemove(card) {
    setCards(cards.filter((c) => c.id !== card.id));
  }

  function filterBy(cards, searchText) {
    return cards.filter((c) => c.name.includes(searchText.trim()));
  }

  function handlePreloaderClick() {
    if (cardsToDisplay.length === cardsFiltered.length) {
      return;
    }
    setCardsToDisplay([
      ...cardsToDisplay,
      ...cardsFiltered.slice(
        cardsToDisplay.length,
        cardsToDisplay.length + pageSize
      ),
    ]);
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
