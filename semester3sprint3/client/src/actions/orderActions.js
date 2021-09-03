import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "TELL_ME_WHAT_YOU_WANT" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post("/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "TELL_ME_WHAT_YOU_WANT" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "OPPS_SOMETHING_WENT_WRONG" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const response = await axios.post("/api/orders/getuserorders", {
      userid: currentUser._id,
    });
    console.log(response);
    dispatch({ type: "YAY", payload: response.data });
  } catch (error) {
    dispatch({ type: "OH_NO", payload: error });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "WHAT_YOU_WANT" });

  try {
    const response = await axios.get("/api/orders/getallorders");
    console.log(response);
    dispatch({ type: "YAY", payload: response.data });
  } catch (error) {
    dispatch({ type: "OH_NO", payload: error });
  }
};

export const deliverOrder = orderid => async dispatch => {
  try {
    const response = await axios.post("/api/order/deliverorder", { orderid });
    console.log(response);
    alert("Order Delivered");
    const orders = await axios.get("/api/orders/getallorders");
    dispatch({ type: "YAY", payload: orders.data });
  } catch (error) {
    console.log(error);
  }
};
