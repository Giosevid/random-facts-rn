import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import Dashboard from './src/screens/Dashboard';

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
};

export default App;
