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
        <div>Your Cart</div>
        <div>cultsport</div>
        <hr />
        { cartDetails.length == 0 ? (
          <div style={{ textAlign: "center", fontWeigth: "500" }}>
            Cart is empty
          </div>
        ) : (
          <div className="cart-body__products">
            {cartDetails?.map((el)=>(
               <div key={el.id}>
<div style={{display:"flex"}} >
                <img width={'100px'} src='https://static.fibre2fashion.com/MemberResources/LeadResources/1/2013/9/Seller/1347469/Images/1347469_0_201309221024030000000.jpg' />
                 <div>
                 <h1 style={{fontWeight:"bold",fontSize:"20px",marginRight:"650px"}}>{el.name}</h1>
                  <h3 style={{marginRight:"690px"}}>mens</h3>
                 
                  <div style={{display:"flex",justifyContent:"space-between",width:"750px",marginTop:"7px"}}>
                  <div style={{display:"flex",gap:"2px"}}>
                    <div style={{border:"1px solid black",backgroundColor:"red",color:"white",padding:"0 7px 0 7px"}} onClick={() => handleUpdate(el.id,el.count - 1)}>-</div>
                    <span style={{border:"1px solid black",padding:"0 6px 0 6px"}}>{el.count}</span>
                    <div style={{border:"1px solid black",backgroundColor:"green",color:"white",padding:"0 7px 0 7px"}} onClick={() => handleUpdate(el.id,el.count + 1)}>+</div>
                  </div>
                  <div >
                  <p >Price: ₹{el.price*el.count}</p>
                  </div>
                  </div>
                 </div>
               </div> 
                 <hr/>
                </div>
               
            ))}
           <div style={{width:"70%",margin:"auto",display:"flex",justifyContent:"flex-end",gap:"15px"}}>
           <button style={{border:"1px solid black",backgroundColor:"black",color:"white",padding:"0 10px 0 10px"}} onClick={() => {redirectToPay()}}>PAY NOW </button> 
           <div>₹{total}</div>
           </div>
          </div>
          
        )}
      </div>
    </>
  );
};

export default Cart;