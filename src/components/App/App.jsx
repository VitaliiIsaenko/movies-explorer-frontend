import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/sign-in" />
      </Switch>
    </div>
  );
}

export default App;
