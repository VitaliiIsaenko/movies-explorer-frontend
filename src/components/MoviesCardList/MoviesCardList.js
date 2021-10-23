import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({cards, savedCards}) {
  return (
    <section className="cards">
      <ul className="card-list">
        {cards.map((c, i) => {
          return (
            <li>
              <MoviesCard key={i} card={c} savedCard={savedCards} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
