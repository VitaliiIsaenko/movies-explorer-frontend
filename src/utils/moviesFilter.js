import {shortMovieDuration} from './constants';

export function filterBy(movies, searchText, onlyShort) {
  return movies.filter((m) =>
    m.name.includes(searchText.trim()) && (onlyShort ? m.duration <= shortMovieDuration : true)
  );
}
