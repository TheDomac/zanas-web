import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NewTab from "./scenes/NewTab";
import Home from "./scenes/Home";

import { routes } from "consts/routes";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={routes.NEW_TAB}>
            <NewTab />
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
