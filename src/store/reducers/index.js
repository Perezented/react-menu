import { combineReducers } from "redux";

import { menuFetchReducer, categoriesFetchReducer } from "./dataFetchReducer";
import { counterReducer } from "./counterReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";
import { specialOfTheDayReducer } from "./specialOfTheDayReducer";
export default combineReducers({
    menuFetchReducer,
    categoriesFetchReducer,
    counterReducer,
    orderDetailsReducer,
    specialOfTheDayReducer,
});
