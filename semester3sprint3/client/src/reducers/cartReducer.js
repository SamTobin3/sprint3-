export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "THROW_IT_IN_THE_CART":
      const alreadyExists = state.cartItems.find(
        item => item._id === action.payload._id
      );
      if (alreadyExists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "GET_DIS_OUTTA_THE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
