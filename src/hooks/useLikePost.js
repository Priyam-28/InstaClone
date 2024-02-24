import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast"

// import React from 'react'
export default function useLikePost(post) {
const showToast=useShowToast();
const authUser=useAuthStore((state=>state.user))
const[liked,setisLiked]=useState(post.liked.includes(authUser?.uid));
const [isUpdating, setIsUpdating] = useState(false);
const [likes, setLikes] = useState(post.likes.length);
const handleLike =async ()=>{
    if(isUpdating)return;
    if(!authUser) return showToast("Error","Excuse me Brother Login","error");
    setIsUpdating(true);
    try{
        // some part for user likes in databse is left
        setisLiked(!liked);
        liked?setLikes(likes-1):
        setLikes(likes+1);
    }
    catch(error){
        showToast("Error","error.message","error");
    }
    finally{
        setIsUpdating(false);
    }
};

  return (
    { liked, likes, handleLike, isUpdating }
  )
}
