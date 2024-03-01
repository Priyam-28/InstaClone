// import React from 'react'

import { Grid } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";

export default function ProfilePosts() {
  return (
    <Grid templateColumns={{
        sm:"repeat(1,1fr)",
        md:"repeat(3,1fr)",
    }}
    gap={1}
    columnGap={1}>
        <ProfilePost />
    </Grid>
  )
}
