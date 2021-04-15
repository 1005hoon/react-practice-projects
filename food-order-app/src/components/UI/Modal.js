import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick}></div>
);

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalRoot = document.querySelector("#overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClick={props.onClick} />, portalRoot)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalRoot)}
    </>
  );
};

export default Modal;
