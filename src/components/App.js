import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import PageNotFound from "./PageNotFound/PageNotFound";
import Movies from "./Movies/Movies";

function App(props) {
  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sign-up" />
          <Route path="/sign-in"/>
          <Route path="/profile" />
          <Route path="/movies" >
            <Movies/>
          </Route>
          <Route path="/saved-movies" />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
