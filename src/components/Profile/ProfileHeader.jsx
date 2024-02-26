import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react";


export default function ProfilePost() {
  return (
    <Flex  gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:'row'}}>
        <AvatarGroup size={{base:'xl',md:"2.5xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={'auto'}>
        
        <Avatar src="./img1.png"/>
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={'auto'} flex={1}>
            <Flex gap={3} direction={{base:"column",sm:"row"}} justifyContent={{base:'center',sm:"flex-start"}}alignItems={"center"} w={"full"}>
                <Text>Yo BOIS</Text>
                <Button>Edit Profile</Button>
            </Flex>
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>  
            <Button>Follow 
                </Button>
            </Flex>
            <Flex gap={{base:2,sm:4}} alignItems={"center"} justifyContent={"center"}>
                <Text as={"span"} fontSize={{base:'xs',md:'sm'}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>Posts</Text>
                </Text>
                <Text as={"span"} fontSize={{base:'xs',md:'sm'}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>Followers</Text>
                </Text>
                <Text as={"span"} fontSize={{base:'xs',md:'sm'}}>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>Following</Text>
                </Text>

            </Flex>
            <Text fontSize={"sm"}>
                Uses Bio
            </Text>
        </VStack>
        
      
    </Flex>
  )
}
