import React from "react";
import styled from "styled-components";
import github from "../img/github.png";
import next from "../img/next.png";
import docker from "../img/docker.png";
import { PageAnimation } from "../Animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <motion.div
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <CourseStyle>
        <Course>
          <h2>GitHub crash course</h2>
          <div className="line"></div>
          <Link to="courses/react">
            <img src={github} alt="git and github" />
          </Link>
        </Course>
        <Course>
          <h2>NEXT js App</h2>
          <div className="line"></div>
          <Link to="courses/javascript">
            <img src={next} alt="git and github" />
          </Link>
        </Course>
        <Course>
          <h2>Docker Practicum</h2>
          <div className="line"></div>
          <Link to="courses/soon">
            <img src={docker} alt="git and github" />
          </Link>
        </Course>
      </CourseStyle>
    </motion.div>
  );
};
const CourseStyle = styled.div`
  min-height: 100vh;
  align-items: center;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Course = styled.div`
  padding-bottom: 10rem;
  text-align: center;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
    object-fit: cover;
  }
  img {
    width: 100%;
  }
`;

export default Courses;
