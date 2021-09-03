import axios from "axios";

export const registerUser = user => async dispatch => {
  dispatch({ type: "YOU_NEW_AROUND_HERE?" });
  try {
    const response = await axios.post("/api/users/register", user);
    console.log(response);
    dispatch({ type: "WE_KNOWS_EACH_OTHER" });
  } catch (error) {
    dispatch({ type: "GET_OUTTA_HERE_OR_TRY_AGAIN", payload: error });
  }
};

export const loginUser = user => async dispatch => {
  dispatch({ type: "YOU_NEW_AROUND_HERE" });

  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);
    dispatch({ type: "SURE_WE_KNOWS_YA", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "WHO_KNIT_YOU?", payload: error });
  }
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUsers = () => async dispatch => {
  dispatch({ type: "TRY_AGAIN" });

  try {
    const response = await axios.get("/api/users/getallusers");
    console.log(response);
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_USERS_FAILED", payload: error });
  }
};

export const deleteUser = userid => async dispatch => {
  try {
    await axios.post("/api/users/deleteuser", { userid });
    alert("User deleted");
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
