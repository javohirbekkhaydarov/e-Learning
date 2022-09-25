import React from "react";
import reading from "../img/reading.jpg";
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
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



export default AboutSection;
