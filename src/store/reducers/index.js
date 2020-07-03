import { combineReducers } from "redux";

import { menuFetchReducer, categoriesFetchReducer } from "./dataFetchReducer";
import { counterReducer } from "./counterReducer";
export default combineReducers({
    menuFetchReducer,
    categoriesFetchReducer,
    counterReducer,
});
