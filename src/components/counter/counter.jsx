import React from "react";
import { useState } from "react";

function Counter(props) {
    console.log(props);
    let [counter, setCounter] = useState(1);
    return (
        <div className="counter">
            <button
                onClick={() => {
                    if (counter <= 0) {
                        setCounter(0);
                    } else {
                        setCounter(counter - 1);
                    }
                }}
            >
                -
            </button>

            <label>
                <p>Total:</p>
                <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    id="counter"
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
                    console.log("in counter, props.foodItem ", props.foodItem);
                    console.log("props", props);
                    props.addItem(props.foodItem);
                }}
            >
                Add to cart
            </button>
        </div>
    );
}

export default Counter;
