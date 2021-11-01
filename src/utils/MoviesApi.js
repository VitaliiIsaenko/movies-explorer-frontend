class MoviesApi {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((movies) =>
        movies.map((m) => {
          m.img = `${this._baseUrl}${m.image.url}`;
          m.name = m.nameRU;
          return m;
        })
      );
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject("API returned an error");
  }
}

const api = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
