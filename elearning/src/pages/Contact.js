import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation";
const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        exit="exit"
        variants={PageAnimation}
        initial="hidden"
        animate="show"
      >
        <h1> hey</h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
