import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const { items } = useContext(CartContext);
  const [btnHighlighed, setBtnHighlighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timerId = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => clearTimeout(timerId);
  }, [items]);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button
      className={`${btnHighlighed ? classes.bump : ""} ${classes.button}`}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
