import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./scenes/home";
import Register from "./scenes/register";

import { routes } from "./consts/routes";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path={routes.REGISTER}>
            <Register />
          </Route>
          <Route path={routes.HOME}>
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
