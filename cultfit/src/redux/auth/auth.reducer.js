import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    VERIFICATION
  } from "./auth.types";
  
  let token = localStorage.getItem("token");
  const initial = {
    isAuth: !!token,
    token: token,
    loading: false,
    error: false,
    message:""
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
          error: false,
          message:""
        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          loading: false,
          error: true
        };
      }
      case VERIFICATION:{
        return{
          ...state,
          message:payload
        }
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
  