import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const {
    cart,
    removeItem,
    updateQuantity,
    totalPrice,
  } = useContext(CartContext);

  return (
    <>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              updateQuantity(
                item.id,
                Number(
                  e.target.value
                )
              )
            }
          />

          <button
            onClick={() =>
              removeItem(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>
    </>
  );
};

export default Cart;