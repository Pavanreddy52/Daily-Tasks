import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <>
      <h2>Products</h2>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductList;