import React, { useEffect, useState } from "react";
import { Box, Button, Icon, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { async } from "@firebase/util";
import axios from "axios";
import { addItemToCart } from "../../redux/cart/cart.action";

// import ProductCard1 from "../components/ProductCard1";

// import { getWomensAPI } from "../redux/womens/actions";
// import Navbar from "../Routes/Navbar";
 export const Womens = () => {
  const [data,setData] =useState([])
  const params=useParams()
  console.log(params)
  // const womensData = useSelector((store) => store.womens.womens);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getData=async ()=>{
     try{
      let response=await axios.get(`https://cultfit.onrender.com/product/?cat=${params.head}`)
      console.log(response)
      setData(response.data)
     }catch (err){
        console.log(err)
     }
  }
  useEffect(() => {
   getData()
  }, []);

  const handleAdd=(data)=>{
    dispatch(addItemToCart(data))
  }

  console.log("data is here" ,data)  
  return (
   <> 
      <Box 
    w="90%"
    margin="auto"
    justifyContent="center"
    alignItems="center"
    mr="15" 
    // bg="teal" ml="10" 
    paddingBottom="20px">
      
      
      {/* <h1>Hello</h1> */}
      <br/>
      <Box
        w="100px"
        marginTop="100px"
        justifyContent="left"
        marginLeft="1000px"
      >
        {/* <Select placeholder="Sortby">
          <option value="lowtohigh">Low to high</option>
          <option value="hightolow">High to low</option>
        </Select> */}
      </Box>
      <br />
      {/* <div className="storeNavv" mt="">
          {" "}
          <p >T-SHIRT</p>
          <p >JOGGERS</p>
          <p >SWEATSHIRT</p>
          <p >TRACKSUIT</p>
          <p >TANKTOP</p>
          <p >GIFTBOX</p>
         
        <p >JACKET</p>
          <p >SOCKS</p>
          <p>BOYSHORTS</p>
        </div> */}
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} spacing={4}>
        {data?.map((post) => (         
          <Box justifyContent="center" w="350px">
            <Image
              width="250px"
              height="380px"
              display="block"
              // align-items= "center"
                // ml="10"            
              mt="5"
              src={post.image}
              alt={post.title}
              onClick={() => {
                navigate(`/${post.title}`);
              }}
            />
            {/* <AddIcon /> */}
            <Text   fontSize="md" as='b'>{post.title}</Text>
            <Text fontSize="xs" color="black">{post.desc}</Text>
            <Text  fontSize="md" as='b'>₹ {post.price}</Text>
             <br/>

            {/* <Button bg="black">Add To Cart</Button> */}     
                       
          </Box>       
         ))} 
      </SimpleGrid>

    

   </Box>
  
    </>
    // <Box>womens</Box>
  );
};
// export default Womens;
