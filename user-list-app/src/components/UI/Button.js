import React from "react";
import style from "./Button.module.css";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      className={`${className} ${style.button}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
