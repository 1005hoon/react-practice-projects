import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import style from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorHandler = (e) => {
    setError(null);
  };
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
