import React from 'react'
import {
  Drawer, 
  DrawerBody, 
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, 
  useDisclosure,
  VStack,
  HStack,
  IconButton,
  Flex,
  Spacer
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiMenuAltLeft } from 'react-icons/bi';
import { FaInstagram, FaFacebookF, FaLinkedin } from  'react-icons/fa';
import { useNavigate } from 'react-router-dom'

function Header() {

  const {isOpen, onOpen, onClose} = useDisclosure()
  const navigate = useNavigate();

  const logout = () => {

    localStorage.clear();
    navigate("/home")
  } 

  return (
  <>
  <VStack>
    <Flex w={"100%"}>
      <Button
        pos={"fixed"} 
        top={"4"} 
        left={"4"} 
        colorScheme={"blue"} 
        p={"0"} 
        w={"10"} 
        h={"10"} 
        borderRadius={"full"} 
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Spacer></Spacer>
      <IconButton icon={<FaFacebookF />} 
        variant="ghost"
        color="current"
        position={"fixed"}
        top={'4'}
        right={"16"}
        zIndex={'overlay'}>
      </IconButton>
      <IconButton icon={<FaInstagram />} 
        variant="ghost"
        color="current"
        position={"fixed"}
        top={'4'}
        right={"24"}
        zIndex={'overlay'}>
      </IconButton>
      <IconButton icon={<FaLinkedin />} 
        variant="ghost"
        color="current"
        position={"fixed"}
        top={'4'}
        right={"32"}
        zIndex={'overlay'}>
      </IconButton>
    </Flex>
  </VStack>
  <Drawer isOpen={isOpen} placement="left" onClose={onClose}>

    <DrawerOverlay />

      <DrawerContent>

        <DrawerCloseButton />
        <DrawerHeader>Renis</DrawerHeader>
        <DrawerBody>
        { 
           localStorage.getItem('user-info') ? 
          <>
            <VStack alignItems={"flex-start"}>
              <Button  onClick={onClose} colorScheme={"blue"} variant={"ghost"}>
                <Link to={'/'}>Home</Link>
              </Button>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Button  onClick={onClose} colorScheme={"blue"} variant={"ghost"}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
            </VStack>
            
          </>:
          <>
            
          </>
        }
          
        {
          localStorage.getItem('user-info') ? 
          <>
            <HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
              <Button onClick={onClose} colorScheme={"blue"}>
                <Link onClick={logout}>Log Out</Link>
              </Button>
            </HStack>
          </>:
          <>
            <HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
              <Button onClick={onClose} colorScheme={"blue"}>
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme={"blue"} variant={"outline"}>
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </>
        }
          
        </DrawerBody>
      </DrawerContent>
  </Drawer>

  </>
  );
}

export default Header
