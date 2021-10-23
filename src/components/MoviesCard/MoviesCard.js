import "./MoviesCard.css";

function MoviesCard({ card }) {
  return (
    <div className="card">
      <img src={card.img} alt="Фото фильма" />

      <div className="card__bar">
        <div className="card__name-like-section">
          <p className="card__name">{card.name}</p>
          <div className="card__action card__action_type_like"></div>
        </div>

        <p className="card__duration">{card.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
