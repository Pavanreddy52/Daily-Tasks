import { useContext } from "react";
import { CartContext } from "./CartContext";
import Product from "./Product";

function Cart() {
  const { cartCount } = useContext(CartContext);
  

  return <h2>Cart Items Added: {cartCount}</h2>;
}

export default Cart;
