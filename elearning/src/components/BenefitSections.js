import React from "react";
import styled from "styled-components";
import homeIntro2 from "../img/homeIntro2.jpg";
import { About, Description, Image } from "../styles";
const BenefitSections = () => {
  return (
    <Benefits>
      <Description>
        <h2>High Quality learning system</h2>
        <div className="benefit">
          <h3> Online platform </h3>
          <h3> High experenced mentors</h3>
          <h3> Fast Learning system</h3>
          <h3> Offline school for adults for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="9-maktab pastdarg'om xoncharbog'" />
      </Image>
    </Benefits>
  );
};

// style

const Benefits = styled(About)`
  flex-direction: row-reverse;

  h2 {
    color: #fff;
    text-transform: capitalize;
    padding: 2rem;
    padding-bottom: 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background: #fff;
    color: #257f69;
    font-weight: 400;
    width: 70%;
    margin: 2rem;

    border-left: 3px solid #222;
  }
`;
export default BenefitSections;
