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

function handleSearch(searchText) {
  console.log('hey');
  if (cards.length !== 0) {
    //todo: perform search
    console.log('hey');
    setCards(cards.filter(c => searchText.includes(searchText)));
  }
  api
    .getMovies()
    .then((result) => {
      setCards(cards.filter(c => searchText.includes(searchText)));
    })
    .catch((err) => {
      console.log(err);
    });
}

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="movies">
        <SearchForm onSubmit={handleSearch}/>
        <MoviesCardList cards={cards} />
        <Preloader />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
