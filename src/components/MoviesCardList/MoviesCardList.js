import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  function handleCardRemove(card) {
    props.onCardRemove(card);
  }

  function handleCardLike(isLiked) {
    
  }

  return (
    <section className="cards">
      <ul className="card-list">
        {props.cards.map((c) => {
          return (
            <li  key={c.id}>
              <MoviesCard
                card={c}
                savedCard={props.savedCards}
                onCardRemove={handleCardRemove}
                onCardLike={handleCardLike}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
