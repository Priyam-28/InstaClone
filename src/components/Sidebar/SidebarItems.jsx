// import React from 'react'

import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./Profile";
import Search from "./Search";



export default function SidebarItems() {
  return (
    <>
    <Home/>
    <Search />
    <Notifications/>
    <CreatePost/>
    <ProfileLink/>


    
    </>
  )
}
