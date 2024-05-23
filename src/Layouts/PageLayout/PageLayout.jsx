// import React from 'react'

import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar"
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

export default function PageLayout({children}) {
    const {pathname}=useLocation();
    const [user,loading]=useAuthState(auth);
    const RenderSidebar= pathname!=="/auth" &&user;
    const RenderNavbar=!user && !loading && pathname!=="/auth";
    const checkAuthUser=!user && loading;

  if(checkAuthUser) return <PageSpinner/>
  return(
    <Flex flexDir={RenderNavbar ? "column":"row"}>
        {/* Sidebar items are appeared on the left side of the screen */}
        {RenderSidebar ? (
            <Box w={{base:'70px', md:"240px"}}>
                <Sidebar/>
          </Box>
        ):null}
        {RenderNavbar ? <Navbar/> : null}
        {/* The other side of the page */}
        <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
				{children}
			</Box>
      
    </Flex>
  )
}

const PageSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};