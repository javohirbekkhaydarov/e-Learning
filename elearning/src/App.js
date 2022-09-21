import React from "react";
import BenefitSections from "./components/BenefitSections";
import FaqSection from "./components/FaqSection";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <AboutUs />
      <BenefitSections />
      <FaqSection />
    </>
  );
};

export default App;
