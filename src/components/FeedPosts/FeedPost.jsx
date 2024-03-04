// import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'
import useGetUserProfileById from "../../hooks/useGetUserProfileById";


export default function FeedPost() {
  // const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
    <PostHeader/>
    <Box my={2} borderRadius={5}>
        
        <Image src='/img1.png' alt={"Feed Post img"} />
    </Box>
    <PostFooter/>
      
    </>
  )
}
