import React from "react";
import { useState } from "react";

function Counter(props) {
    let [counter, setCounter] = useState(1);
    console.log("counter props", props, counter);
    return (
        <div className="counter">
            <button
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                -
            </button>
            {/* {<h6>Total: </h6>} */}

            <label>
                Total:{" "}
                <input
                    type="integer"
                    value={counter}
                    onChange={(event) => {
                        setCounter(Math.floor(event.target.value));
                    }}
                ></input>
            </label>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>
            <br />
            <button
                onClick={() => {
                    props.foodItem.amount = counter;
                    props.addItem(props.foodItem);
                }}
            >
                Add to cart
            </button>
        </div>
    );
}

export default Counter;
