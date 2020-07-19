import {
    FETCH_ORDER_DATA_START,
    FETCH_ORDER_DATA_SUCCESS,
    FETCH_ORDER_DATA_FAILURE,
} from "../actions";

const initialState = {
    isFetching: false,
    error: "",
    orderDetailsArray: "",
};

export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        // For data fetch failure
        case FETCH_ORDER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        // When data fetch is successful
        case FETCH_ORDER_DATA_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                orderDetailsArray: action.payload,
            };
        // When data fetch is started
        case FETCH_ORDER_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: "",
                orderDetailsArray: action.payload,
            };

        default:
            return state;
    }
};
