import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lobster&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
  }

  button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #fff;
    transition: all 0.2s ease;
    

    &:hover {
      background: #23d997;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem
  }

  h3 {
    color: #fff
  }

  h4 {
    font-weight: bold;
    font-size: 2.3rem;
  }

  span {
    color: #23d997;
    font-weight: bold;
  }

  a {
    font-size: 1.1.rem;
  }

  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 1.6
  }

`;

export default GlobalStyle;
