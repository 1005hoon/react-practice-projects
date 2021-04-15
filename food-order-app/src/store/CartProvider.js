import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = state.items.concat(action.payload.item);
      const updatedTotalAmount =
        state.totalAmount +
        action.payload.item.price * action.payload.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: { item } });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: { id } });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
