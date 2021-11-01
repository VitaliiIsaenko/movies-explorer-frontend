import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import PageNotFound from "./PageNotFound/PageNotFound";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import Login from "./Login/Login";
import React from "react";
import { useState } from "react/cjs/react.development";
import api from "../utils/MainApi";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("jwt") !== null);
  
  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (!jwt) {
      setIsLoggedIn(false);
      return;
    }

    api
      .getCurrentUser(jwt)
      .then((result) => {
        console.log(result);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  }, [isLoggedIn]);

  function handleLogin() {
   setIsLoggedIn(true);
  }
  
  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/sign-in">
            <Login onLogin={handleLogin}/>
          </Route>
          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Profile />
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
    </BrowserRouter>
  );
}

export default App;
