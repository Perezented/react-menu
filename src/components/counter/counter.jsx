import React from "react";
import { useState } from "react";

function Counter(props) {
  let [counter, setCounter] = useState(1);
  const thatCartItem = props.cart.dict[props.foodItem.menuItemID];
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
          props.addItem(props.foodItem);
        }}
      >
        {thatCartItem
          ? counter > 0
            ? thatCartItem.amount === counter
              ? "In Cart"
              : "Update"
            : thatCartItem.amount === 0
            ? "Removed!"
            : "Remove"
          : "Add"}
      </button>
    </div>
  );
}

export default Counter;
