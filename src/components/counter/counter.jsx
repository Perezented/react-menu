import React from "react";
import { useState } from "react";

function Counter(props) {
    let [counter, setCounter] = useState(1);
    return (
        <div>
            <button
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                -
            </button>
            {<h6>Total: {counter}</h6>}

            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>
            <br />
            <button>Add to cart</button>
        </div>
    );
}

export default Counter;
