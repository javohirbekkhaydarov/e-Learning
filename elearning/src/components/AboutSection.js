import React from "react";
import reading from "../img/reading.jpg";
import styled from "styled-components";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2> Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>
              {" "}
              you <span> can change</span>
            </h2>
          </Hide>
          <Hide>
            <h2> world.</h2>
          </Hide>
          <p>
            {" "}
            An educated mind can teach many. And educated mind is better than
            empty
          </p>
          <button> About Us</button>
        </div>
      </Description>
      <Image>
        <img
          src={reading}
          alt="school library man 9-maktab pastdarg'om xoncharbog'"
        />
      </Image>
    </About>
  );
};

// Styled Components

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;

`
export default AboutSection;
