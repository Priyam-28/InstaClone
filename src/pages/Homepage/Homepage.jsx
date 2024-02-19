// import React from 'react'

import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUser from "../../SuggestedUsers/SuggestedUser";


export default function Homepage() {
  return (
    <>
    <Sidebar/>
    <Container 
    maxW={"container.lg"}>
      <Flex gap={20}>
      <Box flex={2} py={10}>
        <FeedPosts />
      </Box>
      <Box flex={3} mr={20} display={{base:"none",lg:"block"}}>
        <SuggestedUser />
      </Box>
    </Flex>
      
    </Container>
    
    </>
  )
}
