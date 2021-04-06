import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ToggleProps {
  title: string;
  children: ReactNode;
}

const Toggle = ({ title, children }: ToggleProps) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="line"></div>
    </motion.div>
  );
};

export default Toggle;
