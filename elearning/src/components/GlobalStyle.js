import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

 }

 body {
  background-color: #008080;
 }

 button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: transparent;
  padding: 1rem 2rem;
  border: 3px solid #fff;
  color: #fff;
  transition: all .25s linear;
  &:hover {
    background-color: #fff;
    color: #008080;
  }
 }

`;

export default GlobalStyle;
