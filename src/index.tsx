import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import GlobalStyles from "./common/styles/globalStyles";

import ClockProvider from "services/Clock";
import SelectedScreenProvider from "services/SelectedScreen";
import DonationsInfoProvider from "services/DonationsInfo";
import LanguageProvider from "services/Language";

const AppWithProviders = () => (
  <LanguageProvider>
    <DonationsInfoProvider>
      <ClockProvider>
        <SelectedScreenProvider>
          <GlobalStyles />
          <App />
        </SelectedScreenProvider>
      </ClockProvider>
    </DonationsInfoProvider>
  </LanguageProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
