export function filterBy(movies, searchText, onlyShort) {
  return movies.filter((m) =>
    m.name.includes(searchText.trim()) && (onlyShort ? m.duration <= 40 : true)
  );
}
