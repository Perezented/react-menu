import { authenticatedAxios } from "../../utils/authenticatedAxios";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";
export const FETCH_ORDER_DATA_START = "FETCH_ORDER_DATA_START";
export const FETCH_ORDER_DATA_SUCCESS = "FETCH_ORDER_DATA_SUCCESS";
export const FETCH_ORDER_DATA_FAILURE = "FETCH_ORDER_DATA_FAILURE";
export const ADD_ITEM = "ADD_ITEM";

// Initial fetch of data
export const fetchMenuData = (link) => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START });

        authenticatedAxios()
            .get(`/${link}`)
            .then((res) => {
                dispatch({
                    type: FETCH_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FETCH_DATA_FAILURE,
                    payload: err,
                });
            });
    };
};
// Initial fetch of deeper menu data
export const fetchDeeperMenuItems = (link) => {
    return (dispatch) => {
        dispatch({ type: FETCH_CATEGORIES_START });

        authenticatedAxios()
            .get(`/menu/${link}`)
            .then((res) => {
                dispatch({
                    type: FETCH_CATEGORIES_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FETCH_CATEGORIES_FAILURE,
                    payload: err,
                });
            });
    };
};

export const increment = () => {
    return {
        type: "INCREMENT",
    };
};
export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};
// export const addItem = (additionalPrice) => {
//     return (dispatch) => {
//         dispatch({ type: ADD_ITEM, payload: additionalPrice });
//     };
// };

//  fetch of orderDetails
export const fetchOrderDetails = (link) => {
    return (dispatch) => {
        dispatch({ type: FETCH_ORDER_DATA_START });

        authenticatedAxios()
            .get(`/${link}`)
            .then((res) => {
                dispatch({
                    type: FETCH_ORDER_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FETCH_ORDER_DATA_FAILURE,
                    payload: err,
                });
            });
    };
};
