import {Box, Button, Heading, HStack, Input, Stack, VStack,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"} p="16" color={"white"}>
        <Stack direction={['column','row']}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size={"md"} textTransform={"uppercase"}>for more Information send mail</Heading>
           
                <HStack borderBottom={"2px solid white"} p={"2"}>
                    <Input placeholder='Enter Email Here..' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor={"none"} />
                    <Button p={"0"} colorScheme={"blue"} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
                <Heading textTransform={"uppercase"} textAlign={"center"}>renis</Heading>
                <Text bottom={"2"} pos={"absolute"}>@All rights received</Text>
            </VStack>

            <VStack w={"full"}>
                <Heading textTransform={"uppercase"} textAlign={"center"} size={"md"}>Social Link</Heading>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer
