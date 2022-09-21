import React from "react";
import homeIntro2 from "../img/homeIntro2.jpg";
const BenefitSections = () => {
  return (
    <div className="benefits">
      <div className="description">
        <h2>High Quality learning system</h2>
        <div className="benefit">
          <h30> Online platform </h30>
          <h3> High experenced mentors</h3>
          <h3> Fast Learning system</h3>
          <h3> Offline school for adults for children</h3>
        </div>
      </div>
      <img src={homeIntro2} alt="9-maktab pastdarg'om xoncharbog'" />
    </div>
  );
};

export default BenefitSections;
