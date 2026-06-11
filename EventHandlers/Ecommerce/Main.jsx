import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart.jsx";
import "./Main.css";

function Main() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h1>E-Commerce Cart</h1>

      <ProductList products={products} addToCart={addToCart} />

      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Main;