import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./common/components/Navigation";

import Home from "./scenes/home";
import Register from "./scenes/register";
import Login from "./scenes/login";

import { routes } from "./consts/routes";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path={routes.REGISTER}>
            <Register />
          </Route>
          <Route path={routes.LOGIN}>
            <Login />
          </Route>
          <Route path={routes.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
