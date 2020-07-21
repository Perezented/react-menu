import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    // ADD_ITEM,
} from "../actions";

const initialState = {
    isFetching: false,
    error: "",
    menuArray: "",
    categoriesArray: "",
};
const initialStateCategories = {
    isFetching: false,
    error: "",
    categoriesArray: "",
    menuArray: "",
};
export const menuFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        // For data fetch failure
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                categoriesArray: "",
                isFetching: false,
            };
        // When data fetch is successful
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                categoriesArray: "",
                menuArray: action.payload,
            };
        // When data fetch is started
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: "",
                categoriesArray: "",
                menuArray: action.payload,
            };

        default:
            return state;
    }
};
export const categoriesFetchReducer = (
    state = initialStateCategories,
    action
) => {
    switch (action.type) {
        // For data fetch failure
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        // When data fetch is successful
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                categoriesArray: action.payload,
            };
        // When data fetch is started
        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isFetching: true,
                error: "",
                categoriesArray: action.payload,
            };

        default:
            return state;
    }
};
// const initialTotal = {
//     total: 0,
//     cart: {},
// };
// export const totalReducer = (state = initialTotal, action) => {
//     switch (action.type) {
//         case ADD_ITEM:
//             console.log(action.payload);
//             console.log("state yoooo", state);
//             return {
//                 ...state,
//                 totalPrice: state.total + action.payload,
//             };
//         default:
//             return state;
//     }
// };
