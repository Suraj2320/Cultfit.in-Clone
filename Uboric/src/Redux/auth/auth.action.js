import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "./auth.types";

export const check = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let token = "123abc456";
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const Logins = (creds) => async (dispatch) => {
  //console.log(creds.email);
  dispatch({ type: LOGIN_REQUEST });
  try {
    if (creds.email === "admin" && creds.password === "qwerty@123") {
      let token = "qwerty@123";
      //console.log(token);
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    } else {
      let response = await axios.post("https://reqres.in/api/login", creds);
      console.log(response.data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    }
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const Logout = () => ({ type: LOGOUT });
