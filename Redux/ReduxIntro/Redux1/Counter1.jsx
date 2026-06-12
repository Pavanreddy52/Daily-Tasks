import { useDispatch, useSelector } from "react-redux";
import { add } from "./store";

function Counter1() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch(add(1))}>+1</button>
      <button onClick={() => dispatch(add(5))}>+5</button>
    </>
  );
}

export default Counter1;