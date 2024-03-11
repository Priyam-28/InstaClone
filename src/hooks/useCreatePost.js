import  { useState } from 'react'

import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { useLocation } from 'react-router-dom';

import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import useAuthStore from '../store/authStore';
import usePostStore from '../store/postStore';


export default function useCreatePost() {
    const [isLoading, setisLoading] = useState(false);
    
    const addPost = useUserProfileStore((state) => state.addPost);


    const showToast = useShowToast();
    const authUser = useAuthStore((state) => state.user);
    const createPost = usePostStore((state) => state.createPost);
    const userProfile = useUserProfileStore((state) => state.userProfile)
    const pathname = useLocation();

    const handleCreatePost = async (selectedFile, caption) => {
        if (isLoading) return;
        const newPost = {
            caption: caption,
            likes: [],
            comments: [],
            createdAt: Date.now(),
            createdBy: authUser.uid,

        }
        try {
            const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
            //create a new posts collection and add post in it he addDoc function returns a reference to the newly created document, which is stored in postDocRef
            const userDocRef = doc(firestore, "users", authUser.uid);
            //refernece to the users collection in database
            const imageRef = ref(storage, `posts/${postDocRef.id}`);
            await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
            //adding post id to the user document in the posts array
            await uploadString(imageRef, selectedFile, "data_url");
            //uploading the image to the imageReference
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(postDocRef, { imageURL: downloadURL });
            newPost.imageURL = downloadURL;
            // retrieves the download URL of the uploaded image

            if (userProfile.uid == authUser.uid) createPost({ ...newPost, id: postDocRef.id });
            if (pathname !== "/" && userProfile.uid == authUser.uid)
                addPost({ ...newPost, id: postDocRef.id });

            showToast("Success", "Post created Sucessfully", "success");
        } catch (error) {
            showToast("Error", error.message, "error")
        }
        finally{
            setisLoading(false);
        }
    }


    return {isLoading,handleCreatePost}
}
