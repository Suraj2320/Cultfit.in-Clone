import { Box, Button, HStack, Image, PinInput, PinInputField } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verify } from '../redux/auth/auth.action'


export default function OTP() {
    const [value,setValue]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {message}=useSelector(store=>store.auth)
    const handleClick=()=>{
      console.log(value)
    dispatch(verify(value))
    }
    if(message=="otp verified"){
                navigate('/')     
          }
    
//     useEffect(()=>{
//       //console.log("msg",message)
//       if(message=="otp verified"){
//         navigate('/login')     
//   }
//   else if(message=="now you can reset your password"){
//     navigate('/reset')
//   }
//     },[message])
  return (
    <div>
        <br/> <br/> <br/> <br/> <br/>
        <Box    
   
      borderColor="gray.200"
      border='1px'
      m={"auto"}
      justifyContent="center"
      alignItems="center"
      textAlign='center'
      maxW={{sm:"100vw",md:"40vw",lg:"20vw"}}
      >
        
        <Image m='auto' mt='10px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" />
              <h1 style={{fontWeight:"bold",fontSize:"20px",marginTop:"20px",textAlign:"center"}}>OTP</h1>
        
        
        <HStack mb="2" mt="10"
        justifyContent="center"
        alignItems="center">
  <PinInput type='numeric' onChange={(e)=>setValue(e)}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<br/>
        <Box
        mt={"5"}
        
                borderRadius={0}
             onClick={handleClick}
             m="auto"
             style={{height:"40px",padding:"1%",borderRadius:"5px"}} b={0}
             background={'rgb(131,58,180) linear-gradient(90deg, rgb(131,58,180,1) 0%, rgb(253,29,29,1) 50%, rgb(252,176,69,1) 100%)'}
              w={{sm:"80%",md:"80%",lg:"60%"}}
                // width="full"
              >
                Submit
              </Box>
              <br/>
        </Box>
       
    </div>
  )
}
