// import React from 'react'

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import useGetSuggestedUser from "../hooks/useGetSuggestedUsers"
import SuggestedHeader from "../components/SuggestedUsers/SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";

export default function SuggestedUsers() {
  const {isLoading,suggestedUsers}=useGetSuggestedUser();
  if(isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>
      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={13} fontWeight={"bold"}
          _hover={{color:"grey.300"}} cursor={"pointer"}>
            Sell All
          </Text>
        </Flex>
      )}
      {suggestedUsers.map((user)=>(
        <SuggestedUser user={user} key={user.id}/>
      ))}
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
				© 2023 Built By{" "}
				<Link href='https://www.youtube.com/@asaprogrammer_' target='_blank' color='blue.500' fontSize={14}>
					As a Programmer
				</Link>
			</Box>
    </VStack>
  )
}
