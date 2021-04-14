import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout} />
    </Card>
  );
};

export default Home;
