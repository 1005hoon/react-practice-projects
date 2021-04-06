import React from "react";

import AboutSection from "../components/About/AboutSection";
import ServicesSection from "../components/Service/ServicesSection";
import FaqSection from "../components/FAQ/FaqSection";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = (): JSX.Element => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
