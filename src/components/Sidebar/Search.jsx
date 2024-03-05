import { Box, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Tooltip, useDisclosure,Button } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/content";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import { useRef } from "react";


const Search = () => {
	const {isOpen,onOpen,onClose}=useDisclosure();
	const {user,isLoading,findUser,setUser}=useSearchUser();
	const searchRef=useRef(null);
	const handleSearchUser = (e) => {
		e.preventDefault();
		findUser(searchRef.current.value);
	};
	
	
	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={onOpen}
				>
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight">
				<ModalOverlay/>
				<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Search User</ModalHeader>
					<ModalBody pb={6}>
						<form onSubmit={handleSearchUser}>
							<FormControl>
								<FormLabel>Username</FormLabel>
								<Input placeholder="hello" ref={searchRef} />
							</FormControl>
							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type="submit" ml={"auto"} size={"sm"} my={4}
								isLoading={isLoading}>
									Search
								</Button>
							</Flex>
						</form>
						{user && <SuggestedUser user={user} setUser={setUser} />}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Search;