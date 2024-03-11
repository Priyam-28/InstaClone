// import React from 'react'

import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";


export default function ProfilePosts() {
  const {isLoading,posts}=useGetUserPosts();
  const noPosts =!isLoading && posts.length===0;
  if (noPosts) return <NoPostsFound/>
  return (
    <Grid templateColumns={{
        sm:"repeat(1,1fr)",
        md:"repeat(3,1fr)",
    }}
    gap={1}
    columnGap={1}>
      {isLoading && [0,1,2].map((_,idx)=>(
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
            <Box h={"300px"}>
              Contents Wrapped
            </Box>
          </Skeleton>
        </VStack>
      ))}
        {!isLoading && (
				<>
					{posts.map((post) => (
						<ProfilePost post={post} key={post.id} />
					))}
				</>
			)}
    </Grid>
  )
}
const NoPostsFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
			<Text fontSize={"2xl"}>Post Something Here😉</Text>
		</Flex>
	);
};
