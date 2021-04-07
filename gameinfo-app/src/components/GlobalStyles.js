import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    &::--webkit-scrollbar {
      width: 0.5rem
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgray
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }

  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #333
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    padding: 1rem 0 0.5rem;
    font-weight: 700
  }

  p {
    font-size: 1.2rem;
    padding: 1rem;
    line-height: 1.6;
    color: #696969
  }

  a {
    text-decoration: none;
    color: #333
  }
`;

export default GlobalStyles;
