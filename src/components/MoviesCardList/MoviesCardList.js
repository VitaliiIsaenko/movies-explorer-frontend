import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { cards } from "../../utils/constants";

function MoviesCardList() {
  return (
    <section className="cards">
      <ul className="card-list">
        {cards.map((c, i) => {
          return (
            <li className="card-list__element">
              <MoviesCard key={i} card={c} />
            </li>
          );
        })}
      </ul>
      <button type="button" className="button button_type_more-cards">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
