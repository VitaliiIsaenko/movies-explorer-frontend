import './App.css';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Main from './Main/Main'
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="page">
      <Switch>
        <Route exact path="/"> 
        <Main/>
        </Route> 
        <Route path="/sign-in" >
          </Route>
        <Route path="/sign-up"/>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>

    </div>
  </BrowserRouter>

  );
}

export default App;
