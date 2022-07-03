import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl55isaaa3jyw01uj4zeh0nm0/master",
  cache: new InMemoryCache(),
});
