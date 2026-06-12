import useCounter from "./useCounterr";
import React from "react";

function CounterExample1(){
    const{count,increment,decrement,reset}= useCounter(0);

    return(
        <div>
            <h2>Count is:{count}</h2>
            <button onClick={increment}>Inc (+)</button>
            <button onClick={decrement}>Dec (-)</button>
            <button onClick={reset}>Reset</button>
        </div>
        
    );
}
export default CounterExample1;