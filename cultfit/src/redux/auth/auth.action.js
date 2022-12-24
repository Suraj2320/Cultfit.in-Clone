import axios from "axios";
import { signIn } from "./firebase";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  VERIFICATION
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

    let res=await axios.post("https://cultfit.onrender.com/users/signup",creds)
    console.log(res.data)
    alert(`your otp is ${res.data.otp}`)
     dispatch({ type: REGISTER_SUCCESS });
  } catch (e) {
    dispatch({ type: REGISTER_ERROR });
  }
};



export const Logins = (creds) => async (dispatch) => {
  //console.log(creds.email);
  dispatch({ type: LOGIN_REQUEST });
  try {
   
    let response=await axios.post('https://cultfit.onrender.com/users/login',creds)
    console.log(response.data.token)
      //console.log(token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
    alert("Wrong Credentials")
  }
};

export const Logout = ()=>(dispatch) => {
  dispatch({ type: LOGOUT })

};


export const verify=(creds)=>async(dispatch)=>{
  console.log(creds)

  try{
    let response=await axios.post("https://cultfit.onrender.com/users/verification",{"creds":creds})
    console.log(response)
    dispatch({type:VERIFICATION,payload:response.data.message})
  }catch(e){
    alert("Wrong OTP")
  }
}