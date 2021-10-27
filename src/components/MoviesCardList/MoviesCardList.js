import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  function handleCardRemove(card) {
    setCards(cards.filter((c) => c.id !== card.id));
  }

  function handleCardLike(isLiked) {
    
  }

  return (
    <section className="cards">
      <ul className="card-list">
        {cards.map((c) => {
          return (
            <li key={c.id}>
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
