import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector(state => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="OH GOD NO, NOT AGAIN" />}
      {success && <Success success="Youre pizza pie coming in hot" />}

      <StripeCheckout
        amount={subtotal * 111}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Iv1xyDcQHsyzjC7eBAsbCL0Pah8hqhlfcHMnLj4QIYTVehhWxBrEwGXi2YgLFUa1xekBZWXQafxKwSx0ZwYl9fN00nEJoVBhI"
        currency="BitCoin"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
