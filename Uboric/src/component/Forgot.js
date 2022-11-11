import { Box, Button, Image, Input, Stack } from '@chakra-ui/react'
import React from 'react'

function Forgot() {
  return (
   <Box w='100%' h='700px' bgColor='black' color='white'  >
    <Box w={{sm:'350px',md:'400px',lg:'550px'}} height='600px' border='1px' borderColor='gray.200' position='absolute' top='30' left='480'>
    <Image m='auto' mt='70px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" />
            <Image  m='auto' mt='15px'  src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png' />
           
      <h1 style={{marginTop:'50px',fontWeight:'bold',fontSize:'25px'}}>Forgot Password?</h1>
      <h4 style={{marginTop:'20px'}}>Please enter your Email Address. You will receive a link</h4>
      <h4>to create a new password via Email.</h4>
      <Stack w='md' m='auto' mt='10' gap='5'>
      <Input placeholder='Your Email*' />
      <Button  background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} w='150px'>Reset Password</Button>
      </Stack>
    </Box>
   </Box>
  )
}

export default Forgot