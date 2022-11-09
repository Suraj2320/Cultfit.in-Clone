import {
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
  } from "./register.types";
  
  const initial = {
    users: [],
    loading: false,
    error: false
  };
  const arr = [];
  
  export const registerReducer = (state = initial, { type, payload }) => {
    switch (type) {
      case REGISTER_REQUEST: {
        return {
          ...state,
          loading: true,
          error: false
        };
      }
      case REGISTER_SUCCESS: {
        console.log(arr, payload);
        arr.push(payload);
        localStorage.setItem("user", JSON.stringify(arr));
        return {
          ...state,
          users: [...state.users, payload],
          loading: false,
          error: false
        };
      }
      case REGISTER_ERROR: {
        return {
          ...state,
          loading: false,
          error: true
        };
      }
  
      default:
        return state;
    }
  };
  