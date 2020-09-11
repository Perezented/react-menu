import { authenticatedAxios } from "../../utils/authenticatedAxios";
import Axios from "axios";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";
export const FETCH_ORDER_DATA_START = "FETCH_ORDER_DATA_START";
export const FETCH_ORDER_DATA_SUCCESS = "FETCH_ORDER_DATA_SUCCESS";
export const FETCH_ORDER_DATA_FAILURE = "FETCH_ORDER_DATA_FAILURE";
export const FETCH_SPECIALOFTHEDAY_START = "FETCH_SPECIALOFTHEDAY_START";
export const FETCH_SPECIALOFTHEDAY_SUCCESS = "FETCH_SPECIALOFTHEDAY_SUCCESS";
export const FETCH_SPECIALOFTHEDAY_FAILURE = "FETCH_SPECIALOFTHEDAY_FAILURE";
export const PUSH_ORDER_START = "PUSH_ORDER_START";
export const PUSH_ORDER_SUCCESS = "PUSH_ORDER_SUCCESS";
export const PUSH_ORDER_FAILURE = "PUSH_ORDER_FAILURE";

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

//  fetch of specialOfTheDay
export const fetchSpecailOfTheDay = (link) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SPECIALOFTHEDAY_START });

    authenticatedAxios()
      .get(`/${link}`)
      .then((res) => {
        dispatch({
          type: FETCH_SPECIALOFTHEDAY_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FETCH_SPECIALOFTHEDAY_FAILURE,
          payload: err,
        });
      });
  };
};
export const pushData = (newOrder) => {
  return (dispatch) => {
    dispatch({ type: PUSH_ORDER_START });

    Axios.post("http://localhost:5678/orderDetails", newOrder)
      .then((res) => {
        console.log(res);
        dispatch({
          type: PUSH_ORDER_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: PUSH_ORDER_FAILURE,
          payload: err,
        });
      });
  };
};
