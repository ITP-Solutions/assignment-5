import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";
import AnimalSubreddit from './components/AnimalSubreddit';
import AuthorSubreddit from './components/AuthorSubreddit'
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
      <div className="App row bg-secondary text-light p-3">
        <div className="p-3 m-3">
          <NavLink to="/animals/cats" className="btn btn-primary">Cats</NavLink>
          <NavLink to="/animals/chickens" className="btn btn-primary">Chickens</NavLink>
          <NavLink to="/animals/cows" className="btn btn-primary">Cows</NavLink>
          <NavLink to="/animals/bunnies" className="btn btn-primary">Bunnies</NavLink>
          <NavLink to="/animals/pigs" className="btn btn-primary">Pigs</NavLink>
        </div>
        <Switch>
          <Route path="/" exact={true}>
            <Redirect to="/animals/cats" />
          </Route>
          <Route path="/authors/:author" exact={true}>
            <AuthorSubreddit />
          </Route>
          <Route path="/animals/:animal" exact={true}>
            <AnimalSubreddit />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
