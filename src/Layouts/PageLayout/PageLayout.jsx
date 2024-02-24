// import React from 'react'

import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar"

export default function PageLayout({children}) {
    const {pathname}=useLocation();
  return (
    <Flex>
        {/* Sidebar items are appeared on the left side of the screen */}
        {pathname !== "/auth" ? (
            <Box w={{base:'70px', md:"240px"}}>
                <Sidebar/>
          </Box>
        ):null}
        {/* The other side of the page */}
        <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
				{children}
			</Box>
      
    </Flex>
  )
}
