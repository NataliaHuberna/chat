import {createGlobalStyle} from 'styled-components';
import {COLORS} from "./constants/colors";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${COLORS.PRIMARY_COLOR};
    background: linear-gradient(
            left,
            ${COLORS.PRIMARY_COLOR} 0%,
            ${COLORS.SEMI_PRIMARY_COLOR} 100%
    );
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Raleway", sans-serif;    
  }
`;
