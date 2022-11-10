import { Box, Button, Input, Stack } from '@chakra-ui/react'
import React from 'react'

function Forgot() {
  return (
   <Box w='100%' h='700px' backgroundColor='whitesmoke'  >
    <Box w={{sm:'350px',md:'400px',lg:'550px'}} height='360px' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'  position='absolute' top='180' left='480'>
      <h1 style={{marginTop:'30px',fontWeight:'bold',fontSize:'25px'}}>Forgot Password?</h1>
      <h4 style={{marginTop:'30px'}}>Please enter your Email Address. You will receive a link</h4>
      <h4>to create a new password via Email.</h4>
      <Stack w='md' m='auto' mt='10' gap='5'>
      <Input placeholder='Your Email*' />
      <Button  bgColor='black' color='white' w='150px'>Reset Password</Button>
      </Stack>
    </Box>
   </Box>
  )
}

export default Forgot