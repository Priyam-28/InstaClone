import { Box, Flex } from '@chakra-ui/react'
// import React from 'react'
import SidebarItems from './SidebarItems'

export default function Sidebar() {
  return (
    <Box height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base :2,md:4}}>
    
        Hello
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
            <SidebarItems/>
        </Flex>

    </Box>
  )
}
