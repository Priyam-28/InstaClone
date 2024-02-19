// import React from 'react'

import { Button, Input } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
    <Input
        placeholder="Email"
        fontSize={14}
        type='email'
        size={"sm"}
    />
    <Input
        placeholder="password" 
        fontSize={14}
        type="password"
        size={"sm"}

         />

    <Button
     w={"full"}
     colorScheme="blue"
     size={"sm"}
     fontSize={14}
     >
        Log in
        
    </Button>
    </>
  )
}
