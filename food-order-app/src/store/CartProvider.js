import React from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const addItem = (item) => {};
  const removeItem = (id) => {};

  const cartState = {
    items: [],
    totalAmount: 0,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
