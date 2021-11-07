class MainApi {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  _getMovieRequest(movie) {
    return {
      country: movie.country,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailer: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    };
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "GET",
    })
      .then(this._checkResponse)
      .then((movies) =>
        movies.map((m) => {
          m.id = m.movieId;
          m.name = m.nameRU;
          m.img = m.image;
          return m;
        })
      );
  }

  postMovie(movie) {
    const movieRequest = this._getMovieRequest(movie);

    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "POST",
      body: JSON.stringify(movieRequest),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "DELETE",
    }).then(this._checkResponse);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "GET",
    }).then(this._checkResponse);
  }

  editCurrentUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  _checkResponse(result) {
    return result.json().then((json) => {
      if (result.ok) {
        return json;
      }

      if (result.status >= 400 && result.status < 500) {
        return Promise.reject(json);
      }

      return Promise.reject("Произошла ошибка на сервере");
    });
  }
}

const api = new MainApi({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
