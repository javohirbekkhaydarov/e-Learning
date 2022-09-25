import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#!">
          {" "}
          we school
        </a>
      </h1>
      <ul>
        <li>
          <a href="#!">About US</a>
        </li>
        <li>
          <a href="#!"> Courses</a>
        </li>
        <li>
          <a href="#!"> Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 12rem;
  
  background-color: #0a6969;
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    list-style: none;
    display: flex;
  }

  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
