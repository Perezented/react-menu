import { combineReducers } from "redux";

import { dataFetchReducer } from "./dataFetchReducer";
import { counterReducer } from "./counter";
export default combineReducers({
    dataFetchReducer,
    counterReducer,
});
