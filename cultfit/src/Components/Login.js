import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BiUser } from 'react-icons/bi';
import {
    Drawer,
    DrawerBody,
  useDisclosure,
    DrawerHeader,
  Button,
    DrawerContent,
    Box,
    Input,
    Stack,
    Image,
   
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { check, Logins } from "../redux/auth/auth.action";
// import { signInWithGoogle } from "../redux/auth/firebase";
import axios from "axios";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { LOGIN_SUCCESS } from "../redux/auth/auth.types";


export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    const [creds, setCreds] = useState({});
    const { isAuth, token } = useSelector((store) => store.auth);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {users}=useSelector(store=>store.register)
    const users = JSON.parse(localStorage.getItem("user"));
   // console.log("hey", users);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCreds({ ...creds, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(creds);
     
     dispatch(Logins(creds))
    };

    useEffect(() => {
      console.log(token);
      if (isAuth) {
        navigate("/");
      } 
    }, [isAuth]);

  const logi=useGoogleLogin({
    onSuccess: async response=>{
    try{
      const data=await  axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
        headers:{
          "Authorization":`Bearer ${response.access_token}`
        }
      })
    console.log(data.data,response.access_token)
    dispatch({ type: LOGIN_SUCCESS, payload: response.access_token });
    }
    catch(e){
      console.log(e)
    }
  }
  })
  
    return (
      <>
        <div  onClick={onOpen}>
          <BiUser size='25px' />
        </div>
        <Drawer size={{xs:'xs',sm:'sm',md:'md'}} placement={placement} onClose={onClose} isOpen={isOpen}>
         
          <DrawerContent bgColor='black' color='white' >
            <DrawerHeader borderBottomWidth='1px' m='auto'>LOGIN</DrawerHeader>
            <Image m='auto' mt='70px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" />
            <Image  m='auto' mt='15px'  src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png' />
            <DrawerBody mt='20px' >  
          <form onSubmit={handleSubmit} >
            <Stack gap='2' w={{sm:'sm',md:'sm',lg:'sm'}} ml='8'>
          <Input  type='text'   name="email"
        onChange={handleChange} placeholder='email' />
          <Input type='password' name="password"
        onChange={handleChange} placeholder='Password' />
          <Box onClick={()=>navigate("/forgot")} display="flex" justifyContent='flex-end'>Lost your password?</Box>
       {/* <Button  type="submit" w="150px" h="50px" background={'rgb(131,58,180) linear-gradient(90deg, rgb(131,58,180,1) 0%, rgb(253,29,29,1) 50%, rgb(252,176,69,1) 100%)'}>Submit</Button> */}
       <Input type="submit"  style={{display:"flex",justifyContent:"center",alignItems:"center",height:"40px",padding:"1%",borderRadius:"5px"}} b={0} background={'rgb(131,58,180) linear-gradient(90deg, rgb(131,58,180,1) 0%, rgb(253,29,29,1) 50%, rgb(252,176,69,1) 100%)'}/>
          </Stack>
        
          </form>
          <Box ml='210px' mt='15px'>Or</Box>
          <Box  style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",height:"40px",padding:"1%",border:"1px solid white",borderRadius:"5px"}} cursor="pointer" m={"auto"} w={"25vw"} onClick={logi}>
            continue with Google <FcGoogle/>
         {/* <GoogleLogin onSuccess={credentialResponse=>{
            console.log(credentialResponse)
          }}onError={()=>{
            console.log('login Failed')
          }}  /> */}
          
          </Box>

          <Box display='flex' justifyContent='center' gap='3' mt='10px' >New customer ?  <span onClick={()=>navigate("/signup")}>Create an account</span></Box>
          </DrawerBody>
          </DrawerContent>
         
        </Drawer>
     
      </>
    )
  }