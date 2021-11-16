import config from '../config.json';

export function filterBy(movies, searchText, onlyShort) {
  return movies.filter((m) =>
    m.name.includes(searchText.trim()) && (onlyShort ? m.duration <= config.SHORT_MOVIE_DURATION : true)
  );
}
