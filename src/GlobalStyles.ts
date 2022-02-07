import {createGlobalStyle} from 'styled-components';

//@import url(https://fonts.googleapis.com/css?family=Quicksand:300,400,700);
//
//@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);

export const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(47,100,90,1);
    background: linear-gradient(
            left,
            rgba(47,100,90,1) 0%,
            rgba(111,161,123,1) 100%
    );
    margin: 0;
    padding: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  hr {
    border: 0;
    height: 1px;
    opacity: .3;
    background-image: linear-gradient(
            to right,
            rgba(255,255,255,.2),
            rgba(255,255,255,1),
            rgba(255,255,255,.2)
    );
  }
`;