// import React from 'react'

import { Box, Flex } from "@chakra-ui/react";
import useLikePost from "../../hooks/useLikePost";
import { NotificationsLogo, UnlikeLogo } from "../../assets/content";

export default function PostFooter() {
    const authUser = useAuthStore((state) => state.user);
    const { handleLike, liked, likes } = useLikePost(post);
  return (
    <Box mb={10} marginTop={"auto"}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
            <Box onClick={handleLike} cursor={"pointer"} fontSize={17}>
                {!liked ?
                <NotificationsLogo/>:
                <UnlikeLogo/>
            }
            </Box>
        </Flex>
      
    </Box>
  )
}
