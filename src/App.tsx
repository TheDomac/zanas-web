import React from "react";
import cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Alert, CloseButton, AlertDescription } from "@chakra-ui/react";

import Home from "./scenes/home";

import { routes } from "./consts/routes";
import { cookiesTypes } from "./consts/cookies";
import { useToggle } from "./utils/useToggle";

const CookiesAlertWrapper = styled.div`
  position: fixed;
  bottom: 7px;
  left: 7px;
  width: 250px;
`;

const App = () => {
  const cookiesNotification = useToggle(
    !cookies.get(cookiesTypes.SHOW_COOKIES_NOTIFICATION)
  );

  const setCookiesNotificationAsShown = () => {
    cookiesNotification.setOff();
    cookies.set(cookiesTypes.SHOW_COOKIES_NOTIFICATION, String(true), {
      expires: 365,
    });
  };

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
      {cookiesNotification.isOn && (
        <CookiesAlertWrapper>
          <Alert status="warning" paddingTop="40px">
            <AlertDescription>
              This site uses cookies to improve your experience. If you agree to
              our use of cookies, please close this message and continue to use
              this site.
            </AlertDescription>
            <CloseButton
              position="absolute"
              onClick={setCookiesNotificationAsShown}
              right="8px"
              top="8px"
            />
          </Alert>
        </CookiesAlertWrapper>
      )}
    </>
  );
};

export default App;
