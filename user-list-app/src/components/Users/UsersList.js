import React from "react";
import Card from "../UI/Card";
import style from "./UsersList.module.css";

const UsersList = ({ users }) => {
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
