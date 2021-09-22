import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

const customers =  gql`
      query {
        customers {
          name
        }
      }
    `;
 

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
    <App customers={customers}/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
