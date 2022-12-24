import { Box, Button, DrawerHeader, Image, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { register } from "../redux/auth/auth.action";
import OTP from "./otp";

export default function Signup() {
  const [find,setFind]=useState(false)
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();
  const navigate=useNavigate()
  // const { users } = useSelector((store) => store.register);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  // console.log(creds)
   dispatch(register(creds))
   setFind(true)
  //  navigate("/")
  };
  // useEffect(() => {
  //   //console.log(users);
  // }, [handleSubmit]);

  return (
    <Box bgColor='black' h='700px'>
    <Box  color='white'    >
      <br/> <br/> <br/>
      {find?<OTP/>:
    <Box   borderColor='gray.200' type='outline' w={{sm:'80vw',md:'50vw',lg:'30vw'}} height='600px' m={"auto"} >
    <Box border='1px'  borderColor='gray.200'>
        <h1 style={{fontWeight:"bold",fontSize:"25px",marginTop:"20px",textAlign:"center"}}>Signup</h1>
      
        <Image m='auto' mt='70px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" />
            <Image  m='auto' mt='15px'  src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png' />
            
    <form style={{marginTop:"40px"}} onSubmit={handleSubmit}>
      <Stack gap='2' p={4} >
          <Input  type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
        required/>
          <Input type='email'  name="email"
        placeholder="email"
        onChange={handleChange}
        required />
        <Input type='password'  name="password"
        placeholder="password"
        onChange={handleChange}
        required />
        {/* <Button background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} type="submit">Submit</Button> */}
        <Input type="submit"  style={{display:"flex",justifyContent:"center",alignItems:"center",height:"40px",padding:"1%",borderRadius:"5px"}} b={0} background={'rgb(131,58,180) linear-gradient(90deg, rgb(131,58,180,1) 0%, rgb(253,29,29,1) 50%, rgb(252,176,69,1) 100%)'}/>
         </Stack>
    </form>
    <Box ml='210px' mt='10px'>Or</Box>
    <Box display='flex' gap='3' justifyContent='center'mb={"20px"} >Already have an account?  <Link to="/">Login</Link></Box>
    </Box>
    </Box>}
    </Box>

    </Box>
  );
}
