import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css";
import Navigation from "../Navigation/Navigation";
import React from "react";
import MoviesList from "../MoviesList/MoviesList";

function Movies(props) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <section className="movies">
        <MoviesList/>
      </section>

      <Footer />
    </>
  );
}

export default Movies;
