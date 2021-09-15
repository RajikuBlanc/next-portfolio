import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #354458;
    --subprimary: #6e7886;
    --white : #ffffff;
    --black: #000000;
    --bg: #f2f2f2;
  }
  html{
    font-size: 10px;
    height: 100vh;
  }
  body{
    background-color: var(--bg);
    font-family: 'Roboto Mono';
    color: var(--black);
    letter-spacing: 0.1em;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: var(--black);
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align:bottom;
  }
  button{
    outline: none
  }
`;
export default GlobalStyles;
