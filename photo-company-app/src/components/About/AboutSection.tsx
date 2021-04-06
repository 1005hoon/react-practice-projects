import React from "react";
import home1 from "../../img/home1.png";
import { About, Description, Hide, ImageContainer } from "./styles";
import { motion } from "framer-motion";

const AboutSection = (): JSX.Element => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography ideas that you have. We have
          professionals with amzing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <ImageContainer>
        <img src={home1} alt="guy with a camera" />
      </ImageContainer>
    </About>
  );
};

export default AboutSection;
