import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createClient, Provider } from "urql";

import Home from "./scenes/home";
import Register from "./scenes/register";

import { routes } from "./consts/routes";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

const App = () => {
  return (
    <Provider value={client}>
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
    </Provider>
  );
};

export default App;
