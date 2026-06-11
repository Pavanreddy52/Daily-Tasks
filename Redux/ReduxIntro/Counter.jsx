import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count is : {count}</h1>

      <button onClick={() => dispatch(increment())}>
        Inc (+)
      </button>

      <button onClick={() => dispatch(decrement())}>
        Dec (-)
      </button>
    </>
  );
}

export default Counter;