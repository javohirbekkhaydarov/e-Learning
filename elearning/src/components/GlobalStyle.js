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
 h2 {
  font-weight: lighter;
  font-size: 4rem;
 }
h3 {
  color: #fff;
}
h4 {
  font-weight: bold;
}
span {
  color: #fff;
  font-weight: bolder;
}
a  {
  font-size: 1.1rem;
}
p {
  padding: 3rem 0;
  color: #fff;
  font-size:1.3rem;
  
}
`;

export default GlobalStyle;
