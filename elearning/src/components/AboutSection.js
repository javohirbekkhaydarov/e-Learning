import React from "react";
import reading from "../img/reading.jpg";
import { About, Description, Hide, Image } from "../styles";

import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">

          <Hide>
            <motion.h2
              animate={{
                opacity: 1,
                transform: { translateX: 0 },
                transition: { duration: 0.5 },
                y: 0,
              }}
              initial={{ opacity: 0, y: -40 }}
            >
              {" "}
              Be educated so that
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              animate={{
                opacity: 1,
                transform: { translateX: 0 },
                transition: { duration: 0.7 },
                y: 0,
              }}
              initial={{ opacity: 0, y: -40 }}
            >
              {" "}
              you <span> can change</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              animate={{
                opacity: 1,
                transform: { translateX: 0 },
                transition: { duration: 1 },
                y: 0,
              }}
              initial={{ opacity: 0, y: -40 }}
            >
              {" "}
              world.
            </motion.h2>
          </Hide>
          <p>
            {" "}
            An educated mind can teach many. And educated mind is better than
            empty
          </p>
          <button>About Us</button>
        </div>
      </Description>
      <Image>
        <motion.img
          animate={{
            opacity: 1,
            transform: { translateX: 0 },
            transition: { duration: 1 },
            x: 0,
          }}
          initial={{ opacity: 0, x: 50 }}
          src={reading}
          alt="school library man 9-maktab pastdarg'om xoncharbog'"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
