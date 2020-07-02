import { combineReducers } from "redux";

import { dataFetchReducer } from "./dataFetchReducer";
import { counterReducer } from "./counterReducer";
export default combineReducers({
    dataFetchReducer,
    counterReducer,
});
