import {
  createContext,
  useEffect,
  useReducer,
} from "react";

import { cartReducer } from "./CartReducer";

export const CartContext = createContext();

export const CartProvider = ({
  children,
}) => {
  const savedCart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  const [cart, dispatch] = useReducer(
    cartReducer,
    savedCart
  );

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addItem = (item) => {
    dispatch({
      type: "ADD",
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const updateQuantity = (
    id,
    quantity
  ) => {
    dispatch({
      type: "UPDATE",
      payload: { id, quantity },
    });
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};