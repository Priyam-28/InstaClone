import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";


export default function ProfilePost() {
    const {userProfile}=useUserProfileStore();
    const authUser=useAuthStore((state)=>state.user);
    const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
	const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;

  return (
    <Flex  gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:'row'}}>
        <AvatarGroup size={{base:'xl',md:"2xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={'auto'}>
        
        <Avatar src={userProfile.profilePicURL}/>
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={'auto'} flex={1}>
            <Flex gap={3} direction={{base:"column",sm:"row"}} justifyContent={{base:'center',sm:"flex-start"}}alignItems={"center"} w={"full"}>
            <Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.username}</Text>
            {visitingOwnProfileAndAuth && (
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"white"}
								color={"black"}
								_hover={{ bg: "whiteAlpha.800" }}
								size={{ base: "xs", md: "sm" }}
								// onClick={onOpen}
							>
								Edit Profile
							</Button>
						</Flex>
					)}
					{visitingAnotherProfileAndAuth && (
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"blue.500"}
								color={"white"}
								_hover={{ bg: "blue.600" }}
								size={{ base: "xs", md: "sm" }}
								
							>
								
							</Button>
						</Flex>
					)}
            </Flex>
            
            <Flex gap={{base:2,sm:4}} alignItems={"center"} justifyContent={"center"}>
                <Text as={"span"} fontSize={{base:'xs',md:'sm'}}>
							{userProfile.posts.length}
                    <Text as={"span"} fontWeight={"bold"} mr={1}></Text>
                    Posts
                </Text>
                
                <Text as={"span"} fontSize={{base:'xs',md:'sm'}}>
							{userProfile.followers.length}
                    <Text as={"span"} fontWeight={"bold"} mr={1}></Text>
                    Followers
                </Text>
                <Text as={"span"} fontSize={{base:'xs',md:'sm'}}>
							{userProfile.following.length}
                    <Text as={"span"} fontWeight={"bold"} mr={1}></Text>
                    Following
                </Text>

            </Flex>
            <Flex alignItems={"center"} gap={4}>
					<Text fontSize={"sm"} fontWeight={"bold"}>
						{userProfile.fullName}
					</Text>
				</Flex>
				<Text fontSize={"sm"}>{userProfile.bio}</Text>
        </VStack>
        
      
    </Flex>
  )
}
