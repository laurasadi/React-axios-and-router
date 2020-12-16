import Todo from './Todo';
import React from 'react';
import Joke from './Joke';
import Cats from './Cats';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Cats</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/joke">Joke</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/todo">
        <Todo/>
        </Route>
        <Route path="/joke">
        <Joke/>
        </Route>
        <Route path="/">
        <Cats/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}


export default App;
