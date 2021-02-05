import React from "react";
import ReactDOM from "react-dom";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { ChakraProvider } from "@chakra-ui/react";
import { cacheExchange } from "@urql/exchange-graphcache";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { MeDocument } from "./graphql/generated/graphql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (result: any, args, cache) => {
            cache.updateQuery(
              {
                query: MeDocument,
              },
              (data: any) => {
                if (result.login?.errors) {
                  return data;
                } else {
                  return { me: result.login?.user };
                }
              }
            );
          },
          register: (result: any, args, cache) => {
            cache.updateQuery(
              {
                query: MeDocument,
              },
              (data: any) => {
                if (result.register?.errors) {
                  return data;
                } else {
                  return { me: result.register?.user };
                }
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});

const AppWithProviders = () => (
  <Provider value={client}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
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
