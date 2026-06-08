import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <h2>Shopping Cart</h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}

            <button
              onClick={() =>
                removeFromCart(index)
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{total}</h3>
    </>
  );
}

export default Cart;