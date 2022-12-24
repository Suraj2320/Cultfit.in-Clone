import { Box, Button, Image } from "@chakra-ui/react";
import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect } from "react";
// import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { alldlt, getCartItems, removeItemFromCart, updateCartItem } from "../redux/cart/cart.action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const {isAuth}=useSelector((store)=>store.auth)
  const {data} = useSelector((store) => store.cart);

let total=0;

for(let i=0;i<data.length;i++){
    total+=data[i].price*data[i].count
}
let discount=Math.floor((total/100)*10)
  
  const handleUpdate = (id,newCount) => {

    if (newCount === 0) {

      dispatch(removeItemFromCart(id));

    } else {
      console.log(id)
      dispatch(updateCartItem(id, { count: newCount }));
      
    }
    // dispatch(getCartItems()) 
  };

  useEffect(()=>{
    dispatch(getCartItems())
      },[])
      function loadRazorpay(amnt) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
          alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
          try {
            
            const result = await axios.post('https://cultfit.onrender.com/create-order', {
              amount: amnt + '00',
            });
            const { amount, id: order_id, currency } = result.data;
            const {
              data: { key: razorpayKey },
            } = await axios.get('https://cultfit.onrender.com/get-razorpay-key');
    
            const options = {
              key: razorpayKey,
              amount: amount.toString(),
              currency: currency,
              name: 'example name',
              description: 'example transaction',
              order_id: order_id,
              handler: async function (response) {
                const result = await axios.post('https://cultfit.onrender.com/pay-order', {
                  amount: amount,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                });
                dispatch(alldlt())
                alert(result.data.msg);
            
              },

              prefill: {
                name: 'example name',
                email: 'email@example.com',
                contact: '111111',
              },
              notes: {
                address: 'example address',
              },
              theme: {
                color: '#80c0f0',
              },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          } catch (err) {
            alert(err);
         
          }
        };
        document.body.appendChild(script);
      }

 //console.log("cartafteradd",data);
  
  return (
    <>
      <div className="cart-body">
        
        <br/>
        <br/>  <br/> 
        <h3 style={{fontSize:"20px",fontWeigth:"600",textAlign:"center"}}>Your Cart</h3>
        <h1 style={{fontSize:"28px",fontWeigth:"600",textAlign:"center"}}>cultsport</h1>
        <hr/>
        {  !isAuth ? (
          <div style={{ textAlign: "center", fontWeigth: "500" }}>
            Cart is empty
          </div>
        ) : (
          <Box display={{lg:"flex"}}   justifyContent='space-around' w='80%' m='auto' >
            <Box w={{sm:"100vw",md:"65vw",lg:"30vw"}} >
                <h1 style={{fontSize:"17px",fontWeight:"500",textAlign:"left"}}>Cultgear Order Summary</h1>
                 <br/>
                 <br/>
                 {data?.map((el)=>(
                    <Box key={el._id}   h='200px'  m="auto" marginBottom='15px' display='flex' justifyContent='space-between'   >
                       <Box   h='100%'><Image h='100%' src={el.image} /></Box>
                       <Box    h='100%' display='flex' flexDirection='column' justifyContent="space-evenly"> 
                       <h1 style={{fontWeight:"600",fontSize:"20px",textAlign:"left"}}>{el.title}</h1>
                       <h3 style={{textAlign:"left"}}>{el.category}</h3>
                       <Box display='flex' justifyContent='space-around' g={{sm:"10vw",lg:"20vw"}}>
                        <p style={{textAlign:"left"}}>Price: ₹{el.price}</p>
                         <Box display='flex'>
                            <Box border="1px"  backgroundColor='red' color='white'  h='30px' w='18px' textAlign={"center"} cursor={"pointer"}  onClick={() => handleUpdate(el._id,el.count - 1)}>-</Box>
                            <span style={{border:"1px solid black",height:"28px",width:"18px",marginLeft:"0px",textAlign:"center"}} >{el.count}</span>
                            <Box border="1px"  backgroundColor='green' color='white' h='30px' w='18px' textAlign={"center"} cursor={"pointer"} onClick={() => handleUpdate(el._id,el.count + 1)}>+</Box>
                         </Box>
                       
                       </Box>
                       </Box>
                       
                    </Box>
                    
                 ))}

            </Box>
            <Box m='auto' w={{sm:"100vw",md:"60vw",lg:"30vw"}}>
                <h1 style={{fontSize:"17px",fontWeight:"500",textAlign:"center"}}>Total Summary</h1>
                <br/>
                <Box display='flex' justifyContent='space-around'><h3>Total</h3><h3>₹ {Math.floor(total)}</h3></Box>
                <br/>
                <Box display='flex' justifyContent='space-around'><h3>(-)Discount</h3><h3>- ₹ {discount}</h3></Box>
                <br/>
                <Box display='flex' justifyContent='space-around'><h3  style={{fontSize:"20px",fontWeight:"bold"}}>Total Payable</h3><h3 style={{fontSize:"20px",fontWeight:"bold"}}>₹ {Math.floor(total-discount)}</h3></Box>
                <br/>
                <Box  background='black' textAlign={"center"} p={"3"} w={{sm:"40vw",md:"25vw",lg:"20vw"}} m={"auto"} color='white' cursor={"pointer"} onClick={()=>loadRazorpay(Math.floor(total-discount))}>PAY NOW</Box>
            </Box>
           

          </Box>
          
        )}
      </div>
    </>
  );
};

export default Cart;