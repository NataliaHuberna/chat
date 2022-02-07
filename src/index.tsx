import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
