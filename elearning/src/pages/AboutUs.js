import React from "react";
import AboutSection from "../components/AboutSection";
import BenefitSections from "../components/BenefitSections";
import FaqSection from "../components/FaqSection";
import { PageAnimation } from "../Animation";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <BenefitSections />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
