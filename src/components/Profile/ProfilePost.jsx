import {  Flex, GridItem, Text} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";

// import { MdDelete } from "react-icons/md";


export default function ProfilePost({post}) {
  const userProfile=useUserProfileStore((state)=>state.userProfile);//chekcing the user profile
  const authUser=useAuthStore((state)=>state.user);
  //checking authentication for useer
  const showToast=useShowToast();
  return (
    <>
    <GridItem cursor={"pointer"} borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} position={"relative"} aspectRatio={1/1} >
      <Flex opacity={0} _hover={{opacity:1}} position={"absolute"} top={0} left={0} right={0} bottom={0} bg={"blackAlpha.500"} transition={"all 0.3s ease"} zIndex={1} justifyContent={"center"}>
        <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
          <Flex>
            <AiFillHeart size={20} />
            <Text fontWeight={"bold"} m1={2} >
                Likes
            </Text>
          </Flex>
          <Flex>
            <FaComment size={20} />
            <Text fontWeight={"bold"} m1={2} >
                Comment
            </Text>
          </Flex>
        </Flex>
      </Flex>

    </GridItem>
    </>
  )
}
