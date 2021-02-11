import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./scenes/home";

import { routes } from "./consts/routes";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path={routes.REGISTER}>
            <Register />
          </Route>
          <Route path={routes.LOGIN}>
            <Login />
          </Route> */}
          <Route path={routes.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
