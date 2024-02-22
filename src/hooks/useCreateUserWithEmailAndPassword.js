// import React from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useShowToast from './useShowToast';
import { collection, doc, getDocs,query,setDoc,where } from 'firebase/firestore';


const useSignUpWithEmailAndPassword = ()=>{
    //destructuring assignment to extract values returned by  the function
    const [createUserWithEmailAndPassword,loading,error]=useCreateUserWithEmailAndPassword(auth);
	const showToast = useShowToast();

    

    const signup =async (inputs) => {
        // Handling empty fied errors
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
            showToast("Error","Please enter all the required fields","error");
            return;
        }
        const usersRef = collection(firestore, "users");//coming from firebase representing users collection in firestore

		const q = query(usersRef, where("username", "==", inputs.username));
		const querySnapshot = await getDocs(q);//checking for same users in databse

		if (!querySnapshot.empty) {
			showToast("error", "Username already exists", "error");
			return;
		}

        try{
            const newUser =await
            createUserWithEmailAndPassword(inputs.email,inputs.password);
            if(!newUser && error){
                showToast("error",error.message,"error");
                return;
            }
            if(newUser){
                const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.username,
					fullName: inputs.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),

            };
            await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				// loginUser(userDoc);
			}


        }
        catch(error){
            showToast("Error",error.message,"error");
        }
    };
    return {loading,error,signup}

}

export default useSignUpWithEmailAndPassword;

