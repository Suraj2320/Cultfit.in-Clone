import {
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
  } from "./register.types";
  
  export const Registers = (creds) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      //console.log(creds);
      dispatch({ type: REGISTER_SUCCESS, payload: creds });
    } catch (e) {
      dispatch({ type: REGISTER_ERROR });
    }
  };
  