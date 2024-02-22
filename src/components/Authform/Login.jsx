// import React from 'react'

import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
  const [inputs,setInputs]=useState({
    email: '',
    password: '',
  });
  const{loading,error,login}=useLogin();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
    <Input
        placeholder="Email"
        fontSize={14}
        type='email'
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs(prevState => ({
          ...prevState,
          email: e.target.value
      }))}
    />
    <InputGroup>
    <Input
        placeholder="password" 
        fontSize={14}
        type={showPassword ? "text" : "password"}
        size={"sm"}
        value={inputs.password}
        onChange={(e)=>setInputs({
          ...inputs,password: e.target.value
        })}/>
        <InputRightElement h='full'>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
    
    </InputGroup>
         {

          error && (<Alert status="error" fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12}/>         
             </Alert>
         )}

    <Button
     w={"full"}
     colorScheme="blue"
     size={"sm"}
     fontSize={14}
     isLoading={loading}
     onClick={()=>login(inputs)}
     >
        Log in
        
    </Button>
    </>
  )
}
