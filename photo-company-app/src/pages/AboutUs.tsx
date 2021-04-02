import React from "react";
import AboutSection from "../components/About/AboutSection";
import ServicesSection from "../components/Service/ServicesSection";
import FaqSection from "../components/FAQ/FaqSection";

const AboutUs = (): JSX.Element => {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;
