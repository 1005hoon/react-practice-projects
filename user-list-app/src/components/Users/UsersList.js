import React from "react";
import Card from "../UI/Card";
import style from "./UsersList.module.css";

const UsersList = ({ users }) => {
  if (users.length === 0) {
    console.log(users);
    return null;
  }
  return (
    <Card className={style.users}>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
