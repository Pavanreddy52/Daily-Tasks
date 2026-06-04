import "./Product.css";

function ProductComponent({ product, user }) {
  if (!product) return <p className="error">Product not found</p>;

  return (
    <div className="product-card">
      <h1 className="title">{product.name}</h1>

      {product.stock > 0 ? (
        <p className="stock in">In Stock</p>
      ) : (
        <p className="stock out">Out of Stock</p>
      )}

      {product.discount && (
        <p className="discount">Discount Available</p>
      )}

      {user ? (
        <button className="btn cart">Add to Cart</button>
      ) : (
        <button className="btn login">Login to Purchase</button>
      )}
    </div>
  );
}

export default ProductComponent;