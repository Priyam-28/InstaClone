// import React from 'react'

import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeartFill } from "react-icons/bs";

export default function ProfileTabs() {
  return (
    <Flex w={"full"} justifyContent={"center"} gap={{base:4,sm:10}} textTransform={"uppercase"} fontWeight={"bold"}>
        <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
            <Box fontSize={20}>
                <BsGrid3X3/>
            </Box>
            <Text fontSize={13} display={{base:'none',sm:'block'}}>
                Posts
            </Text>
        </Flex>
        <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
          <Box fontSize={20}>
            <BsBookmark/>
          </Box>
          <Text fontSize={12} display={{base:"none",sm:"block"}}>
            Saved
          </Text>
        </Flex>
        <Flex alignItems={"center"} p={3} gap={1}
          cursor={"pointer"}>
            <Box fontSize={20}>
              <BsSuitHeartFill fontWeight={"bold"}/>
            </Box>
            <Text fontSize={12} display={{base:"none",sm:"block"}}>
              Likes
            </Text>
          </Flex>
      
    </Flex>
    
  )
}
