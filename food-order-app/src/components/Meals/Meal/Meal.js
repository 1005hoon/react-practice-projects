import React, { useContext } from "react";
import MealForm from "./MealForm";
import classes from "./Meal.module.css";
import CartContext from "../../../store/cartContext";

const Meal = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    addItem({
      id: id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealForm addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Meal;
