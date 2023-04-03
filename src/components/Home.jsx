import {Box, Circle, Flex, Image, Spacer, Stack, Text, useMediaQuery} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import ProfileImage from '../assets/Renis-profile.jpeg';
import Social from '../components/Social';
import Profile from '../components/Profile';

function Home() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    useEffect(() => {
      document.title = 'Renis - Profile';
    }, []);

  return (
    <Stack p={"20"}>
        <Circle position={"absolute"} bg={"blue.100"} opacity={"0.1"} w={"300px"} h={"300px"} alignSelf={"flex-end"}  />
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
              spacing={"200px"} p={isNotSmallerScreen ? "32" : "0"}
              alignSelf={"flex-start"}
              w={"100%"}>
            
            <Box mt={isNotSmallerScreen ? "0" : "16"} align={"flex-start"}>
                <Text fontSize={"5xl"} fontWeight={"semibold"}>Hi, I am</Text>
                <Text fontSize={"7xl"} fontWeight={"bold"} bgGradient={"linear(to-r, cyan.400, blue.500,purple.600)"} bgClip={"text"}>Renis Asodariya</Text>
                <Text> PHP Developer</Text>
            </Box>
            <Spacer></Spacer>
            <Image  mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" :"12"} borderRadius={"full"} backgroundColor={"transparent"} boxShadow={"lg"} boxSize={"300px"} alignSelf={"center"}  src={ProfileImage}   />
        </Flex>
        <Social />
        <Profile />
    </Stack>
  )
}

export default Home
