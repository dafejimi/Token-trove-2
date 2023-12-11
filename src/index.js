import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { MoralisProvider } from "react-moralis"
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider initializeOnMount={false} APO>
    <React.StrictMode>
      <Router>
        <ChakraProvider>
        <App />
        </ChakraProvider>
      </Router> 
    </React.StrictMode>
  </MoralisProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
