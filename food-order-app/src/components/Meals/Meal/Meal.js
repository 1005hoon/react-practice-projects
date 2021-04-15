import React from "react";
import MealForm from "./MealForm";
import classes from "./Meal.module.css";

const Meal = ({ name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>{/* <MealForm /> */}</div>
    </li>
  );
};

export default Meal;
