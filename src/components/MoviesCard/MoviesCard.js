import "./MoviesCard.css";
import React from "react";

function MoviesCard({ card, savedCard, onCardRemove, onCardLike }) {
  const [isLiked, setLike] = React.useState(false);

  function handleLikeClick() {
    setLike(!isLiked);
    console.log(card);
    onCardLike(card, !isLiked);
  }

  function handleRemoveClick() {
    onCardRemove(card);
  }

  return (
    <div className="card">
      <img className="card__picture" src={card.img} alt="Фото фильма" />

      <div className="card__bar">
        <div className="card__name-like-section">
          <p className="card__name">{card.name}</p>

          {savedCard ? (
            <button
              onClick={handleRemoveClick}
              className={"button card__action card__action_type_remove"}
            ></button>
          ) : (
            <button
              onClick={handleLikeClick}
              value={isLiked}
              className={`button card__action ${
                isLiked
                  ? "card__action_type_like-active"
                  : "card__action_type_like"
              }`}
            ></button>
          )}
        </div>

        <p className="card__duration">{card.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
