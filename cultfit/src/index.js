import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
    <ChakraProvider>
    <Provider store={store}>
    <GoogleOAuthProvider clientId="903230408812-sev2bujjc68grlgqacku63bks0agvoft.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
    
    </Provider>
    
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
