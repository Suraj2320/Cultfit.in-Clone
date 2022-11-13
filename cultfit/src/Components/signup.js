import { Box, Button, DrawerHeader, Image, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Registers } from "../redux/register/register.action";

export default function Signup() {
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { users } = useSelector((store) => store.register);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(creds);
    e.preventDefault();
    if (creds.password === creds.confirm_password) {
      // console.log(creds.password);
      dispatch(Registers(creds));
      navigate("/")
    }
    else{
        alert("Check Password")
    }
  };
  // useEffect(() => {
  //   //console.log(users);
  // }, [handleSubmit]);

  return (
    <Box bgColor='black' color='white' w='100%' h='800px' >
      
    <Box border='1px' mt='50px' borderColor='gray.200' type='outline' w={{sm:'350px',md:'400px',lg:'550px'}} height='600px' position='absolute' top='30' left='480' >
    
        <h1 style={{fontWeight:"bold",fontSize:"25px",marginTop:"20px"}}>Signup</h1>
      
        <Image m='auto' mt='70px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" />
            <Image  m='auto' mt='15px'  src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png' />
            
    <form style={{marginLeft:"50px",marginTop:"40px"}} onSubmit={handleSubmit}>
      <Stack gap='2' w={{sm:'sm',md:'sm',lg:'sm'}} ml='8'>
          <Input  type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
        required/>
          <Input type='password'  name="password"
        placeholder="password"
        onChange={handleChange}
        required />
        <Input type='password'  name="confirm_password"
        placeholder="confirm_password"
        onChange={handleChange}
        required />
        <Button background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} type="submit">Submit</Button>
          </Stack>
    </form>
    <Box display='flex' gap='3' justifyContent='center' mt='5' >Already have an account?  <Link to="/">Login</Link></Box>
    </Box>
    </Box>
  );
}
