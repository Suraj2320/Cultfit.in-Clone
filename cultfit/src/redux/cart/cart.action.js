// Cart Actions here
import { async } from "@firebase/util";
import axios from "axios";

import {

  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,

  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,

  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,

  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,

} from "./cart.types";




export const getCartItems = () => async(dispatch) => {
    dispatch({ type: GET_CART_ITEMS_LOADING });
 try{
    let res=await axios.get(`https://cultfit.onrender.com/cart/`)
    //console.log(res.data)
    dispatch({type:  GET_CART_ITEMS_SUCCESS,payload:res.data    })
 }
    catch(e){
      console.log(e)
       dispatch({ type: GET_CART_ITEMS_ERROR })
    }
};






export const addItemToCart = (cartInfo) => async(dispatch) => {
//console.log(cartInfo)
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });

  try{
let res=await  axios.post("https://cultfit.onrender.com/cart/", {...cartInfo,count:1} )

//console.log(res.data)
alert("Item Added to cart")

  }catch(e){
console.log(e)
  }
};





export const removeItemFromCart = (cartId) => (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  return axios
    .delete(`https://cultfit.onrender.com/cart/${cartId}`)
    .then((r) => {
      dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: { id: cartId } });
      alert("Item Removed from cart")
      dispatch(getCartItems())
    })
    .catch(() => dispatch({ type: REMOVE_CART_ITEMS_ERROR }));
   

};




export const updateCartItem = (cartId, update) =>async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  
  console.log(cartId,update)

try{
let res=await axios.put(`https://cultfit.onrender.com/cart/${cartId}`,update)
console.log(res,"checing update")

dispatch(getCartItems())
}
catch(e){

}
    // .catch(() => dispatch({ type: UPDATE_CART_ITEMS_ERROR }));
};


export const alldlt=()=>async (dispatch)=>{
  try{
let res=await axios.delete(`https://cultfit.onrender.com/cart/`)
console.log(res)
dispatch(getCartItems())
  }
  catch(e){
console.log(e)
  }

}