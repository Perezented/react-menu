import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
} from "../actions";

const initialState = {
    isFetching: false,
    error: "",
    dataArray: "",
};
const initialStateCategories = {
    isFetching: false,
    error: "",
    categoriesArray: "",
};

export const menuFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        // For data fetch failure
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        // When data fetch is successful
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                menuArray: action.payload,
            };
        // When data fetch is started
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: "",
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
