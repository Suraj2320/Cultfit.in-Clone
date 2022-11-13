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
import { signInWithGoogle } from "../redux/auth/firebase";

export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    const [creds, setCreds] = useState({});
    const { isAuth, token } = useSelector((store) => store.auth);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {users}=useSelector(store=>store.register)
    const users = JSON.parse(localStorage.getItem("user"));
    console.log("hey", users);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCreds({ ...creds, [name]: value });
    };

    const handleSubmit = (e) => {
      console.log(creds);
      e.preventDefault();
      if (creds.email === "admin" || creds.email === "eve.holt@reqres.in") {
        dispatch(Logins(creds));
      }
       else {
        let x = users.find(
          (el) => el.email == creds.email && el.password == creds.password
        );
        if (x) {
          console.log(x);
          dispatch(check(creds));
        }
        else{
          alert("wrong credentials")
        }
      }
    };

    useEffect(() => {
      console.log(token);
      if (token === "qwerty@123" && isAuth) {
        navigate("/admin");
      } else if (isAuth) {
        navigate("/users");
      }
    }, [isAuth]);

    const just=()=>{
      console.log("first")
      dispatch(signInWithGoogle())
    }
  
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
       <Box  style={{display:"flex",justifyContent:"center",padding:"1%",border:"1px solid white"}}>Submit</Box>
          </Stack>
        
          </form>
          <Box ml='210px' mt='15px'>Or</Box>
          <Box  style={{border:"1px solid white",padding:"1%",margin:"auto",textAlign:"center", display:'flex',justifyContent:"center",gap:"5px"}} variant='outline' mt='15px' w='82%'  onClick={just}>SignIn with Google <FcGoogle  size='25px'/></Box>

          <Box display='flex' justifyContent='center' gap='3' mt='10px' >New customer ?  <span onClick={()=>navigate("/signup")}>Create an account</span></Box>
          </DrawerBody>
          </DrawerContent>
         
        </Drawer>
     
      </>
    )
  }