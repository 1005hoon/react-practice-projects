import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Card from "./Card";

import style from "./Modal.module.css";

const Backdrop = ({ onCloseModal }) => (
  <div className={style.background} onClick={onCloseModal} />
);

const ModalOverlay = ({ title, message, onCloseModal }) => (
  <Card className={style.modal}>
    <header className={style.header}>
      <h2>{title}</h2>
    </header>
    <div className={style.content}>
      <p>{message}</p>
    </div>
    <footer className={style.actions}>
      <Button onClick={onCloseModal}>Close</Button>
    </footer>
  </Card>
);

const Modal = ({ title, message, onCloseModal }) => {
  return (
    <>
      {createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.querySelector("#backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onCloseModal={onCloseModal}
        />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export default Modal;
