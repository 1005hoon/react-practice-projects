import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box
  }

  a {
    text-decoration: none;
    color: inherit
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    background: rgba(20, 20, 20, 1);
    color: #fff;
    padding-top: 50px;
  }
`;

export default globalStyles;
