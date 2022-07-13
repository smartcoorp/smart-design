import { scale080, scale100, gray900 } from "./../tokens";
import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', 'Trebuchet MS', Arial, 'Helvetica Neue', sans-serif;
    background: white;
    color: black;
    font-size: ${scale080};
    line-height: ${scale100};
    min-width: 320px;
    margin: 0;
  }
  
  body {
    visibility: visible;
  }
  
  main {
    width: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  a:hover,
  a:focus {
  }
  p,
  li {
    font-size: ${scale080};
    line-height: ${scale100};
  }
  
  /* due to https://github.com/necolas/normalize.css/blob/master/CHANGELOG.md#500-october-3-2016 */
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    line-height: inherit;
  }`;
