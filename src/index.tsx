import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
