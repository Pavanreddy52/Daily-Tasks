import React from "react";
import useCounter from "./useCounter";

function HoverCounter(){
    const {count,increment}= useCounter();

    return(
        <div>
            <h2>Hovered :  {count} times</h2>
            <button onMouseOver={increment}>Hover Over Me</button>
        </div>
    );
}
export default HoverCounter;