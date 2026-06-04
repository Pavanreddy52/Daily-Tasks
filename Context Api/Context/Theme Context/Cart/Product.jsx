import { useContext } from "react";
import { CartContext } from "./CartContext";
import Cart from "./Cart"


function Product() {
  const { cartCount, setCartCount } = useContext(CartContext);

  return (
    <>
    <h1>Please Add Items to Cart</h1>
    <button onClick={() => setCartCount(cartCount + 1)}>
      <p>Add to Cart</p>  
    </button>
    </>
  );
}

export default Product;
