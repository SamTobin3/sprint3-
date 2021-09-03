export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "WANT_SOME":
      return {
        loading: true,
      };
    case "GOT_SOME":
      return {
        loading: false,
        success: true,
      };
    case "NONE_FOR_YOU":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_USER_ORDERS_":
      return {
        loading: true,
        ...state,
      };
    case "COMING_IN_HOT":
      return {
        loading: false,
        orders: action.payload,
      };
    case "GET_USER_ORDERS":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_YOUR_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_YOUR_ORDER_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "GET_YOUR_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
