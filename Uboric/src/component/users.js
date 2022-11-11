import axios from "axios";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cart/cart.action";

export default function User() {
  const [data,setData]=useState([])
  const dispatch=useDispatch()

  useEffect(()=>{
    axios.get(`http://localhost:8080/products`).then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  },[])

  const handleAdd = (el) => {

    dispatch(
      addItemToCart({
        ...el,
        productId: el.id,
        count: 1,
      })
    );
  };

    return(
      <>
      <h1>users</h1>
      {data?.map((el)=>(
        <div style={{

          border: "3px solid black",
  
          gap:"20px",
  
          width: "200px",
        }} key={el.id}>
          <h2 >{el.name}</h2>
          <h3 >{el.description}</h3>
          <button style={{border:"1px solid black"}} onClick={()=>handleAdd(el)}>Add To Cart</button>
        </div>
      ))}
      
      </>
    );
  }
  