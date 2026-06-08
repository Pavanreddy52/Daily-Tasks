import { useContext } from "react";
import { CartContext } from "./CartContext";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mobile",
    price: 25000,
    quantity: 1,
  },
];

const Products = () => {
  const { addItem } =
    useContext(CartContext);

  return (
    <>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button
            onClick={() =>
              addItem(product)
            }
          >
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Products;

