import React from "react";
import reading from "../img/reading.jpg";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2> Be educated so that</h2>
          </div>
          <div className="hide">
            <h2> you can change</h2>
          </div>
          <div className="hide">
            <h2> world.</h2>
          </div>
          <p>
            {" "}
            An educated mind can teach many. And educated mind is better than
            empty
          </p>
          <button> About Us</button>
        </div>
      </div>
      <div className="image">
        <img src={reading} alt="school library man 9-maktab pastdarg'om xoncharbog'" />
      </div>
    </div>
  );
};

export default AboutSection;
