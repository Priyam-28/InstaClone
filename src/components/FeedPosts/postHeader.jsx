// import React from 'react'

import { Flex, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function postHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2}>
            <Link></Link>
            <SkeletonCircle size='11'/>
        </Flex>
    </Flex>
  )
}
