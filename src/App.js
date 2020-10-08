import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import AnimalSubreddit from "./components/AnimalSubreddit";
import AuthorSubreddit from "./components/AuthorSubreddit";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/animals/cats" exact={true} className="nav-link">
              Cats
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/animals/chickens" exact={true} className="nav-link">
              Chickens
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/animals/cows" exact={true} className="nav-link">
              Cows
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/animals/bunnies" exact={true} className="nav-link">
              Bunnies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/animals/pigs" exact={true} className="nav-link">
              Pigs
            </NavLink>
          </li>
        </ul>
        <div className="row">
          <div className="col-12">
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
        </div>
      </div>
    </Router>
  );
}
