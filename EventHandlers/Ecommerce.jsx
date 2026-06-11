import { useState } from "react";

function Ecommerce() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h2>Products</h2>

      <button onClick={() => addToCart("Shoes")}>Add Shoes</button>
      <button onClick={() => addToCart("Shirt")}>Add Shirt</button>

      <h3>Cart Items:</h3>
      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
export default Ecommerce;