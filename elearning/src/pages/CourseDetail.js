import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CourseState } from "../CourseState";
const CourseDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);
  return (
    <>
      {course && (
        <Details>
          <Header>
            <h1>{course.title}</h1>
            <img src={course.mainImg} alt="" />
          </Header>
        </Details>
      )}
    </>
  );
};

const Details = styled.div``;

const Header = styled.div``;

export default CourseDetail;
