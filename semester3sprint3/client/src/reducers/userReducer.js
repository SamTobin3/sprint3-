export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "WHO_KNIT_YA_REQUEST":
      return {
        loading: true,
      };
    case "WHO_KNIT_YA_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "WHO_KNIT_YA_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "ANY_MUMMERS_ALLOWED_IN_REQUEST":
      return {
        loading: true,
      };
    case "YES_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "NO_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "GET_USERS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
