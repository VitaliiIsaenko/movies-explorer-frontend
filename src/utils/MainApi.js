class MainApi {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  postMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(movie),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      headers: this._headers,
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

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject("API returned an error");
  }
}

const api = new MainApi({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
