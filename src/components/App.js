import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import PageNotFound from "./PageNotFound/PageNotFound";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import Login from "./Login/Login";
import React, { useState } from "react";
import api from "../utils/MainApi";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProfileEdit from "./ProfileEdit/ProfileEdit";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );
  const [currentUser, setCurrentUser] = useState(null);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setIsLoggedIn(false);
      return;
    }

    api
      .getCurrentUser(jwt)
      .then((result) => {
        setCurrentUser(result);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  }, [isLoggedIn]);

  function handleLogin(jwt) {
    localStorage.setItem("jwt", jwt);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Main isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/sign-up">
              <Register onLogin={handleLogin} />
            </Route>
            <Route path="/sign-in">
              <Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />
            </Route>
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile onLogout={handleLogout} />
            </ProtectedRoute>
            <ProtectedRoute path="/profile-edit" isLoggedIn={isLoggedIn}>
              <ProfileEdit />
            </ProtectedRoute>
            <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
              <Movies />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
              <SavedMovies />
            </ProtectedRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
