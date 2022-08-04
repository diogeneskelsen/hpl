import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import CreateProperty from './Components/CreateProperty';
import ListProperties from './Components/ListProperties';
import UpdateProperty from './Components/UpdateProperty';

function App() {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <CreateProperty />
        <ListProperties />
        <UpdateProperty />
      </ApolloProvider>
    </>
  );
}

export default App;
