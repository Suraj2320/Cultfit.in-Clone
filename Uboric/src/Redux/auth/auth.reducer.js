import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
  } from "./auth.types";
  
  let token = localStorage.getItem("token");
  const initial = {
    isAuth: !!token,
    token: token,
    loading: false,
    error: false
  };
  
  export const authReducer = (state = initial, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST: {
        return {
          ...state,
          loading: true,
          error: false
        };
      }
      case LOGIN_SUCCESS: {
        localStorage.setItem("token", payload);
        return {
          ...state,
          token: payload,
          isAuth: true,
          loading: false,
          error: false
        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          loading: false,
          error: true
        };
      }
      case LOGOUT: {
        console.log("logout")
        localStorage.removeItem("token");
        return {
          ...state,
          isAuth: false,
          token: ""
        };
      }
  
      default:
        return state;
    }
  };
  