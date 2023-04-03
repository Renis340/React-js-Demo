import {HStack ,Icon} from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF,FaInstagram,FaGoogle,FaLinkedin} from 'react-icons/fa'



function Social() {
  return (
   <>
   <HStack alignSelf={"center"} spacing={"24"}>
        <Icon  as={FaFacebookF}  boxSize={"50"} />
        <Icon as={FaInstagram}  boxSize={"50"} />
        <Icon as={FaGoogle}  boxSize={"50"} />
        <Icon as={FaLinkedin}  boxSize={"50"} />
   </HStack>
   </>
  )
}

export default Social
