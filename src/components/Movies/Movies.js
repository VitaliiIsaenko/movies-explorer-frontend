import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css";
import Navigation from "../Navigation/Navigation";
import React from "react";
import MoviesList from "../MoviesList/MoviesList";

function Movies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <MoviesList />

      <Footer />
    </>
  );
}

export default Movies;
