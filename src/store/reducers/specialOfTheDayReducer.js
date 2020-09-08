import {
    FETCH_SPECIALOFTHEDAY_START,
    FETCH_SPECIALOFTHEDAY_SUCCESS,
    FETCH_SPECIALOFTHEDAY_FAILURE,
} from "../actions";

const initialState = {
    isFetching: false,
    error: "",
    specialOfTheDayArray: "",
};

export const specialOfTheDayReducer = (state = initialState, action) => {
    switch (action.type) {
        // For data fetch failure
        case FETCH_SPECIALOFTHEDAY_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        // When data fetch is successful
        case FETCH_SPECIALOFTHEDAY_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                specialOfTheDayArray: action.payload,
            };
        // When data fetch is started
        case FETCH_SPECIALOFTHEDAY_START:
            return {
                ...state,
                isFetching: true,
                error: "",
                specialOfTheDayArray: action.payload,
            };

        default:
            return state;
    }
};
