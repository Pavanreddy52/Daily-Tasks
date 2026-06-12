import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../productSlice";

function Product() {
  const category = useSelector(
    (state) => state.products.category
  );

  const dispatch = useDispatch();

  return (
    <>
      <h2>Selected: {category}</h2>

      <button
        onClick={() =>
          dispatch(setCategory("Electronics"))
        }
      >
        Electronics
      </button>

      <button
        onClick={() =>
          dispatch(setCategory("Clothing"))
        }
      >
        Clothing
      </button>
    </>
  );
}

export default Product;