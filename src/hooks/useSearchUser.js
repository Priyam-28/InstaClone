import { useState } from 'react'
import useShowToast from './useShowToast';
import {collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

export default function useSearchUser() {
    const [isLoading,setisLoading] =useState(false);
    const showToast=useShowToast();
    const [user,setUser] = useState(null);



    const findUser = async (username)=>{
        try{
            const q=query(collection(firestore,"users"),where("username","==",username));

            const snapshot=await getDocs(q);
            if(snapshot.isempty){
                showToast("Error","User not found","error");


            }
            snapshot.forEach((doc) => {
                setUser(doc.data())
            })

        }
        catch(err){
            showToast("Error",err.message,"Error")

        }
        finally{
            setisLoading(false);
        }
    }

    return {isLoading,findUser,user,setUser};

  
}
