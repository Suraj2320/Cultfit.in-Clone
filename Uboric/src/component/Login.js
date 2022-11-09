import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
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
   
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { check, Logins } from "../Redux/auth/auth.action";

export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    const [creds, setCreds] = useState({});
    const { isAuth, token } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
  
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button>
        <Drawer size={{xs:'xs',sm:'sm',md:'md'}} placement={placement} onClose={onClose} isOpen={isOpen}>
         
          <DrawerContent >
            <DrawerHeader borderBottomWidth='1px' m='auto'>LOGIN</DrawerHeader>
            <DrawerBody mt='220' >
          <form onSubmit={handleSubmit}>
            <Stack gap='2' w={{sm:'sm',md:'sm',lg:'sm'}} ml='8'>
          <Input  type='text'   name="email"
        onChange={handleChange} placeholder='email' />
          <Input type='password' name="password"
        onChange={handleChange} placeholder='Password' />
          <Box onClick={()=>navigate("/forgot")} display="flex" justifyContent='flex-end'>Lost your password?</Box>
          <Button  type="submit">Submit</Button>
          </Stack>
          </form>

          <Box display='flex' justifyContent='center' gap='3' mt='10px' >New customer ?  <Link to="/signup">Create an account</Link></Box>
          </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }