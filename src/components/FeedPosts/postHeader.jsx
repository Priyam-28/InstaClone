

import { Avatar, Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { time } from "../../utils/time";
import useFollowUser from "../../hooks/useFollowUser";



export default function PostHeader({post,creatorProfile}) {
  const {handleFollowUser,isFollowing,isUpdating}=useFollowUser(post.createdBy);
  
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
            <Avatar src={creatorProfile.profilePicURL} alt="Profile Pic" size={"sm"}/>
          </Link>
          ): (
            <SkeletonCircle size='11'/> //for not having the avatar


          )}
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
              {creatorProfile ? (
                <link to={`/${creatorProfile.username}`}>{creatorProfile.username}</link>
              ):(
                <Skeleton height={"10px"} width={"110px"}/>
              )}
              <Box color={"gray.500"}>
                {time(post.createdAt)}
              </Box>
            </Flex>
        </Flex>
    </Flex>
  )
}
