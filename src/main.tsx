import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/services';
import CountryProvider from './contexts/countryContext';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CountryProvider>
        <App />
      </CountryProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
