import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchData, increment, decrement } from "../../store/actions";

function Counter() {
    const counter = useSelector((state) => {
        return state.counterReducer;
    });
    const dispatch = useDispatch();
    console.log(counter);
    return (
        <div>
            {<h6>Counter: {counter}</h6>}

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
export default Counter;
