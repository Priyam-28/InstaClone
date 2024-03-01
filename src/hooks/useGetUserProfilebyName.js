// import React from 'react'

import { useEffect, useState } from "react";
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfilebyName = (username) => {
    const [isLoading,setIsLoading]=useState(true);
    const showToast=useShowToast();
    const { userProfile, setUserProfile } = useUserProfileStore();
    useEffect(()=>{
        const getUserProfile=async()=>{
            setIsLoading(true);
            try{
                const q=query(collection(firestore,"users"),where("username","==",username));
                const Snapshot=await getDocs(q);

                if(Snapshot.empty) return
                setUserProfile(null);

                let userDoc;
                Snapshot.forEach((doc)=>{         //doubt why foe each
                    userDoc=doc.data();
                });
                setUserProfile(userDoc);
                console.log(userDoc);
            }
            catch(err) {
                showToast("Error",err.message,"error");

            }finally{
                setIsLoading(false);
            }
        };
        getUserProfile();
    },
        [setUserProfile,username,showToast]);
    

  return {isLoading,userProfile};
};

export default useGetUserProfilebyName;
