import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Registers } from "../Redux/register/register.action";

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
    <Box  w={{sm:'350px',md:'400px',lg:'550px'}} height='360px' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'  position='absolute' top='180' left='480' >
        <h1 style={{fontWeight:"bold",fontSize:"25px"}}>Signup</h1>
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
        <Button  type="submit">Submit</Button>
          </Stack>
    </form>
    <Box display='flex' gap='3' justifyContent='center' mt='5' >Already have an account?  <Link to="/login">Login</Link></Box>
    </Box>
  );
}
