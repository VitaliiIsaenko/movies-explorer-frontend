import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import api from "../../utils/MoviesApi";
import React from "react";

function Movies(props) {
  const [cards, setCards] = React.useState([]);
  const [cardsToDisplay, setCardsToDisplay] = React.useState([]);

  function handleSearch(searchText) {
    if (cards.length !== 0) {
      setCardsToDisplay(filterBy(cards, searchText));
    } else {
      api
        .getMovies()
        .then((result) => {
          setCards(result);
          setCardsToDisplay(filterBy(result, searchText));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleCardRemove(card) {
    setCards(cards.filter((c) => c.id !== card.id));
  }

  function filterBy(cards, searchText) {
    return cards.filter((c) => c.name.includes(searchText.trim()));
  }
  console.log(cardsToDisplay);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="movies">
        <SearchForm onSubmit={handleSearch} />
        {cardsToDisplay.length !== 0 &&
        <MoviesCardList
          cards={cardsToDisplay}
          onCardRemove={handleCardRemove}
        />}
        <Preloader />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
