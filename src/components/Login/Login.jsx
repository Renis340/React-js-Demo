import {Box, Card, CardBody, CardHeader, FormControl, FormLabel, Input, Stack, FormHelperText, FormErrorMessage, CardFooter, Button} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState("");

    const isError = email === ''

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
          navigate("/")
        }
      },[])

    const login = async () => {
        let item = {password, email} 
        let result = await fetch(" http://127.0.0.1:8000/api/login",{
            method: 'POST',
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
            },
            body: JSON.stringify(item)
          });
          result = await result.json();
          console.log("result",result);
          localStorage.setItem("user-info",JSON.stringify(result));
          navigate("/")
      }

  return (
    <Stack p={"20"}  h={"100vh"} direction={["column","row"]} ml={["","680px"]}>
        <Box>
            <Card w={["","400px"]} shadow={"lg"}>
                <CardHeader alignSelf={"center"} fontWeight={"bold"} fontSize={"3xl"}>
                    Log In
                </CardHeader>
                <CardBody>
                    
                        <FormControl isInvalid={isError}>
                            <FormLabel textAlign={"center"}>Email</FormLabel>
                            <Input type={"email"} value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            {!isError ? (
                                <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel textAlign={"center"}>Password</FormLabel>
                            <Input type={"password"} value={password} onChange={(e) => { setPassword(e.target.value)}} />
                        </FormControl>
                </CardBody>
                <CardFooter  bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
                    <Button colorScheme={"blue"} onClick={login}>Log In</Button>
                    <Button colorScheme={"blue"} variant={"outline"}><Link to={"/signup"}>Sign Up</Link></Button>
                </CardFooter>
            </Card>
        </Box>
    </Stack>  
)
}

export default Login
