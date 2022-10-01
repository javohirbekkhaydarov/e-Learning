import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
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
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="courses"> Courses</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/courses" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="contact"> Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
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
const Line = styled(motion.div)`
  height: 0.2rem;
  background-color: #fff;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  border-radius: 5px;
`;

export default Nav;
