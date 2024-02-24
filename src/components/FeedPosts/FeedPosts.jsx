import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
// import React from 'react'
import FeedPost from "./FeedPost"

export default function FeedPosts() {
  return (
        <Container maxW={"container.sm"} py={10} px={2}>
          <VStack  gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10}/>
              <VStack gap={2} alignItems={"flex-start"}>
                <SkeletonCircle height={"10px"} w={"200px"}/>
                <SkeletonCircle height={"10px"} w={"200px"}/>
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>Contents wrapped</Box>
            </Skeleton>
          </VStack>
          <FeedPost/>
          <>
					<Text fontSize={"md"} color={"red.400"}>
						Dayuum. Looks like you don&apos;t have any friends.
					</Text>
					<Text color={"red.400"}>Stop coding and go make some!!</Text>
				</>
          <>
					<Text fontSize={"md"} color={"red.400"}>
						Dayuum. Looks like you don&apos;t have any friends.
					</Text>
					<Text color={"red.400"}>Stop coding and go make some!!</Text>
				</>



            
        </Container>
  )
}
