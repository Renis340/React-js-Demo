import React from 'react'
import { Box, Flex, Heading, Text, useMediaQuery,Icon, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Progress } from '@chakra-ui/react';
import {DiLaravel, DiPhp ,DiReact} from 'react-icons/di'


function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
  <>
    <Flex direction={isNotSmallerScreen ? 'row' : 'column'} w={"100%"} maxWidth={{base:"200vh", md:"230vh", lg:"230vh", xl:"230vh"}}>
        <Box alignSelf={"center"} px={"32"} py={"16"}>
            <Heading fontWeight={"extrabold"} color={"cyan.500"} size={"4xl"}>Year</Heading>
            <Text fontSize={"2xl"} color={"gray.400"}>Year of Experience</Text>
        </Box>
        <Box alignSelf={"center"} px={"32"} py={"16"} w={"100%"}>
            <Text fontWeight={"bold"} fontSize={"2xl"} display={["flex","block"]}>Porduct Design and Devlopment.</Text>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                 <Card rounded={"xl"} mt={"4"} bg={"gray.600"}  justify={"flex-end"} _hover={{bg:"green.300"}}>
                    <CardHeader>

                    </CardHeader>
                    <CardBody>
                         <Icon color={"white"} p={"4"} as={DiPhp} w={"24"} h={"24"} />  
                         <Progress hasStripe value={64} colorScheme={"red"} />
                    </CardBody>
                    <CardFooter>
                        <Text color={"white"} p={"4"} fontSize={"xl"} fontWeight={"semibold"}>PHP</Text>   
                    </CardFooter>
                </Card>
                <Card rounded={"xl"} mt={"4"} bg={"gray.600"}  justify={"flex-end"} _hover={{bg:"blue.300"}} >
                    <CardHeader>

                    </CardHeader>
                    <CardBody>
                         <Icon color={"white"} p={"4"} as={DiLaravel} w={"24"} h={"24"} /> 
                         <Progress hasStripe value={64} colorScheme={"green"} /> 
                    </CardBody>
                    <CardFooter>
                        <Text color={"white"} p={"4"} fontSize={"xl"} fontWeight={"semibold"}>Laravel</Text>   
                    </CardFooter>
                </Card>
               
                <Card rounded={"xl"} direction={"column"} mt={"4"} bg={"gray.600"}  justify={"flex-end"} _hover={{bg:"red.300"}} >
                    <CardHeader>

                    </CardHeader>
                    <CardBody>
                         <Icon color={"white"} p={"4"} as={DiReact} w={"24"} h={"24"} />  
                         <Progress hasStripe value={64} colorScheme={"blue"} ></Progress>
                          
                    </CardBody>
                    <CardFooter>
                        <Text color={"white"} p={"4"} fontSize={"xl"} fontWeight={"semibold"}>React js</Text>   
                    </CardFooter>
                </Card>
            </SimpleGrid>
            {/* <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={"8"}>
                <Flex rounded={"xl"} direction={"column"} mt={"4"} bg={"blue.400"} h={"30vh"} w={"30vh"} justify={"flex-end"}>
                    <Icon color={"white"} p={"4"} as={DiAndroid} w={"24"} h={"24"} />
                    <Text color={"white"} p={"4"} fontSize={"xl"} fontWeight={"semibold"}>Android App</Text>
                </Flex>
            </Flex>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={"8"}>
                <Flex rounded={"xl"} direction={"column"} mt={"4"} bg={"blue.400"} h={"30vh"} w={"30vh"} justify={"flex-end"}>
                    <Icon color={"white"} p={"4"} as={DiAndroid} w={"24"} h={"24"} />
                    <Text color={"white"} p={"4"} fontSize={"xl"} fontWeight={"semibold"}>Android App</Text>
                </Flex>
            </Flex> */}
        </Box>
    </Flex>
  </>
  )
}

export default Profile
