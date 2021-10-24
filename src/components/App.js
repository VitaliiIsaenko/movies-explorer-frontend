import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import PageNotFound from "./PageNotFound/PageNotFound";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";

function App(props) {
  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sign-up" >
            <Register/>
            </Route>
          <Route path="/sign-in"/>
          <Route path="/profile" >
            <Profile/>
            </Route>
          <Route path="/movies" >
            <Movies/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies/>
            </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
