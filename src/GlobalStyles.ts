import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: rgba(47,100,90,1);
    background: linear-gradient(
            left,
            rgba(47,100,90,1) 0%,
            rgba(111,161,123,1) 100%
    );
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Raleway", sans-serif;    
  }
`;
