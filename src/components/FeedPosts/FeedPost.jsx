// import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'
import useGetUserProfileById from "../../hooks/useGetUserProfileById";


export default function FeedPost({post}) {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
    <PostHeader post={post} creatorProfile={userProfile}/>
    <Box my={2} borderRadius={5} overflow={"hidden"}>
        
        <Image src={post.imageURL} alt={"Feed Post image"} />
    </Box>
    <PostFooter post={post} creatorProfile={userProfile}/>
      
    </>
  )
}
