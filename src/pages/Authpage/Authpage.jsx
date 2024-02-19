// import React from 'react'
import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import Authform from '../../components/Authform/Authform'

export default function Authpage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
        {/* left side of the page basically the image only vibible on medium onwards */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src='/auth.png' h={650} alt='Phone img' />
          </Box>

        {/* Right side whre creentials are to be entered */}
          <VStack spacing={4} align={'stretch'}>
            <Authform />
            <Box textAlign={'center'}>
              Get the App

            </Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src='/playstore.png' h={"10"} alt='Playstore logo' />
              <Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
            </Flex>
          </VStack>



        </Flex>


      </Container>
    </Flex>

  )
}
