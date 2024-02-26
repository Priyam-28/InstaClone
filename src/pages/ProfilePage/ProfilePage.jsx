// import React from 'react'
import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
export default function ProfilePage() {
  return (
    <Container>
        <ProfileHeader />
        <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}>
            <ProfileTabs/>
        </Flex> 
      
    </Container>

  )
}
