import React from "react";
import useCounter from "./useCounter";


function ClickCounter(){
        const {count,setCount}=useCounter();
    return(
        <div> 
            <h2>Clicked {count}Times</h2>
            <button onClick={increment}>Clickme</button>
        </div>
    );
}
export default ClickCounter;