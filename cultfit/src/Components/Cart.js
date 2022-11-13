import { Box, Button, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getCartItems, removeItemFromCart, updateCartItem } from "../redux/cart/cart.action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const cartDetails = useSelector((store) => store.cart.data);

let total=0;

for(let i=0;i<cartDetails.length;i++){
    total+=cartDetails[i].price*cartDetails[i].count
}
let discount=Math.floor((total/100)*10)
  
  const handleUpdate = (id,newCount) => {

    if (newCount === 0) {

      dispatch(removeItemFromCart(id));

    } else {

      dispatch(updateCartItem(id, { count: newCount }));
      
    }
    dispatch(getCartItems()) 
  };

  useEffect(()=>{
    dispatch(getCartItems())
      },[])



 console.log("cartafteradd",cartDetails);
  function redirectToPay() {
    navigate("/checkout");
  }
  return (
    <>
      <div className="cart-body">
        <h3 style={{fontSize:"20px",fontWeigth:"600"}}>Your Cart</h3>
        <h1 style={{fontSize:"28px",fontWeigth:"600"}}>cultsport</h1>
        <hr />
        { cartDetails.length == 0 ? (
          <div style={{ textAlign: "center", fontWeigth: "500" }}>
            Cart is empty
          </div>
        ) : (
          <Box display="flex" justifyContent='space-around' w='80%' m='auto' >
            <Box w='45%' >
                <h1 style={{fontSize:"17px",fontWeight:"500",marginRight:"250px"}}>Cultgear Order Summary</h1>
                 <br/>
                 <br/>
                 {cartDetails?.map((el)=>(
                    <Box key={el.id} w='45%'  h='200px' width='90%' m="auto" marginBottom='15px' display='flex' justifyContent='space-between'  >
                       <Box  w='35%' h='100%'><Image h='100%' src='https://static.fibre2fashion.com/MemberResources/LeadResources/1/2013/9/Seller/1347469/Images/1347469_0_201309221024030000000.jpg' /></Box>
                       <Box  w='60%'  h='100%' display='flex' flexDirection='column' justifyContent="space-evenly"> 
                       <h1 style={{fontWeight:"600",fontSize:"20px",marginRight:"150px"}}>{el.name}</h1>
                       <h3 style={{marginRight:"180px"}}>mens</h3>
                       <Box display='flex' justifyContent='space-around'>
                        <p style={{marginRight:"150px"}}>Price: ₹{el.price}</p>
                         <Box display='flex'>
                            <Box border="1px"  backgroundColor='red' color='white'  h='30px' w='18px'  onClick={() => handleUpdate(el.id,el.count - 1)}>-</Box>
                            <span style={{border:"1px solid black",height:"28px",width:"18px"}} >{el.count}</span>
                            <Box border="1px"  backgroundColor='green' color='white' h='30px' w='18px'  onClick={() => handleUpdate(el.id,el.count + 1)}>+</Box>
                         </Box>
                       
                       </Box>
                       </Box>
                       
                    </Box>
                    
                 ))}

            </Box>
            <Box m='auto' w='35%'>
                <h1 style={{fontSize:"17px",fontWeight:"500"}}>Total Summary</h1>
                <br/>
                <Box display='flex' justifyContent='space-around'><h3>Total</h3><h3>₹ {total}</h3></Box>
                <br/>
                <Box display='flex' justifyContent='space-around'><h3>(-)Discount</h3><h3>- ₹ {discount}</h3></Box>
                <br/>
                <Box display='flex' justifyContent='space-around'><h3  style={{fontSize:"20px",fontWeight:"bold"}}>Total Payable</h3><h3 style={{fontSize:"20px",fontWeight:"bold"}}>₹ {total-discount}</h3></Box>
                <br/>
                <Button  background='black' color='white'>PAY NOW</Button>
            </Box>
           

          </Box>
          
        )}
      </div>
    </>
  );
};

export default Cart;