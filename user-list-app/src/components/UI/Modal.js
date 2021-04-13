import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./Modal.module.css";

const Modal = ({ title, message, onCloseModal }) => {
  return (
    <>
      <div className={style.background} onClick={onCloseModal} />
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
    </>
  );
};

export default Modal;
