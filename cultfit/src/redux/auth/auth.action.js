import axios from "axios";
import { signIn } from "./firebase";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "./auth.types";




import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./auth.types";

export const register = (creds) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    console.log(creds);

    let res=await axios.post("http://localhost:8080/users/signup",creds)
    console.log(res.data)
    
     dispatch({ type: REGISTER_SUCCESS });
  } catch (e) {
    dispatch({ type: REGISTER_ERROR });
  }
};



export const Logins = (creds) => async (dispatch) => {
  //console.log(creds.email);
  dispatch({ type: LOGIN_REQUEST });
  try {
   
    let response=await axios.post('http://localhost:8080/users/login',creds)
    console.log(response.data.token)
      //console.log(token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const Logout = ()=>(dispatch) => {
  dispatch({ type: LOGOUT })

};


