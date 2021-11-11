import "./MovieCard.css";
import React, { useEffect } from "react";

function MovieCard({ card, inSaved, onCardDislike, onCardLike }) {
  const [isLiked, setLike] = React.useState(card._id !== null);

  useEffect(() => {
    setLike(card._id !== null);
  }, [card]);

  function handleCardLike() {
    setLike(true);
    onCardLike(card);
  }

  function handleCardDislike() {
    setLike(false);
    onCardDislike(card);
  }

  function handleCardActionClick(e) {
    e.stopPropagation();
    console.log(e.target);
    console.log(e.currentTarget);
    if (card._id === null) {
      handleCardLike();
    } else {
      handleCardDislike();
    }
  }

  function durationText(duratinMinutes) {
    const hours = Math.floor(duratinMinutes / 60);
    const minutes = duratinMinutes % 60;
    return `${hours}ч ${minutes}м`.replace("0ч ", "");
  }

  function handleClick() {
    window.location.replace(card.trailerLink);
  }

  return (
    //todo: make clicking on card lead to trailer
    <button className="card" onClick={handleClick}>
      <img className="card__picture" src={card.img} alt="Фото фильма" />

      <div className="card__bar">
        <div className="card__name-like-section">
          <p className="card__name">{card.name}</p>

          <button
            onClick={handleCardActionClick}
            value={isLiked}
            className={`button card__action ${
              inSaved
                ? "card__action_type_remove"
                : isLiked
                ? "card__action_type_like-active"
                : "card__action_type_like"
            }`}
          ></button>
        </div>

        <p className="card__duration">{durationText(card.duration)}</p>
      </div>
    </button>
  );
}

export default MovieCard;
