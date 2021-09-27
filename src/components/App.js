import './App.css';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Header from './Header/Header'

function App() {
  return (
    <BrowserRouter>
    <div className="page">
      <Switch>
        <Route path="/sign-in" >
          <Header/>
          </Route>
        <Route path="/sign-up"/>
      </Switch>

    </div>
  </BrowserRouter>

  );
}

export default App;
