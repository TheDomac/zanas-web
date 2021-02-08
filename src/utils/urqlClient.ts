import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { MeDocument } from "../graphql/generated/graphql";

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
          logout: (result: any, args, cache) => {
            cache.updateQuery(
              {
                query: MeDocument,
              },
              () => ({ me: null })
            );
          },
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

export default client;
