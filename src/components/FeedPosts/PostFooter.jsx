// import React from 'react'

import { Box, Flex, Text } from "@chakra-ui/react";
// import useLikePost from "../../hooks/useLikePost";
import { NotificationsLogo, UnlikeLogo } from "../../assets/content";
// import useAuthStore from "../../store/authStore";

export default function PostFooter() {
    // const authUser = useAuthStore((state) => state.user);
    // const { handleLike, liked, likes } = useLikePost();
  return (
    <Box mb={10} marginTop={"auto"}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
            <Box cursor={"pointer"} fontSize={17}>
                
                <NotificationsLogo/>:
                <UnlikeLogo/>
            
            </Box>
            <Text fontWeight={600} fontSize={"sm"}>likes
			</Text>
        </Flex>
      
    </Box>
  )
}
