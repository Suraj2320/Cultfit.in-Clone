import { Box, Button, Image, Input, Stack } from '@chakra-ui/react'
import React from 'react'

function Forgot() {
  return (
   <Box w='100vw' h='700px' bgColor='black' color='white'  >
     <br/> <br/> <br/>
    <Box  w={{sm:'100vw',md:'50vw',lg:'30vw'}} height='600px' border='1px'  borderColor='gray.200'  m={"auto"}>
    <Image m='auto' mt='70px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" />
            <Image  m='auto' mt='15px'  src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png' />
           
      <h1 style={{marginTop:'50px',fontWeight:'bold',fontSize:'25px',textAlign:"center"}}>Forgot Password?</h1>
      <h4 style={{marginTop:'20px',textAlign:"center"}}>Please enter your Email Address. You will receive a link</h4>
      <h4 style={{textAlign:"center"}}>to create a new password via Email.</h4>
      <Stack w='md' m='auto' mt='10' gap='5'>
      <Input placeholder='Your Email*' w={{sm:'80vw',md:'42vw',lg:'25vw'}} m="auto" />
      {/* <Button  background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} w='150px'>Reset Password</Button> */}
      <Box w={{sm:'80vw',md:'42vw',lg:'25vw'}}  p="2%" textAlign={"center"} borderRadius="10px" style={{margin:"auto"}} background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}  >Submit</Box>
      </Stack>
    </Box>
   </Box>
  )
}

export default Forgot