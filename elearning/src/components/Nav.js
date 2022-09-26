import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          {" "}
           We School
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About US</Link>
        </li>
        <li>
          <Link to="courses"> Courses</Link>
        </li>
        <li>
          <Link to="contact"> Contact Us</Link>
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
  padding: 1rem 10rem;

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
