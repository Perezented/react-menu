import {
  FETCH_ORDER_DATA_START,
  FETCH_ORDER_DATA_SUCCESS,
  FETCH_ORDER_DATA_FAILURE,
  PUSH_ORDER_START,
  PUSH_ORDER_SUCCESS,
  PUSH_ORDER_FAILURE,
} from "../actions";

const initialState = {
  isFetching: false,
  error: "",
  orderDetailsArray: "",
  orderList: "",
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

export const pushOrderDetails = (state = initialState, action) => {
  switch (action.type) {
    // When data fetch is started
    case PUSH_ORDER_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    // When data fetch is successful
    case PUSH_ORDER_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        orderList: action.payload,
      };
    // For data fetch failure
    case PUSH_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
