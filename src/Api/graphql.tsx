import { ApolloClient, InMemoryCache } from "@apollo/client";

const { REACT_APP_API } = process.env;

const client = new ApolloClient({
    uri: REACT_APP_API,
    cache: new InMemoryCache()
});

export default client;
