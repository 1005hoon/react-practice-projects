import React from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = (): JSX.Element => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <h1>Contact Us Page</h1>
    </motion.div>
  );
};

export default ContactUs;
