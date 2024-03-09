import {useEffect, useState } from 'react'
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

function useGetSuggestedUser() {
    const [isLoading, setisLoading] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();

    useEffect(() => {
        const getSuggestedUsers = async () => {
            setisLoading(true);
            try {
                const usersRef = collection(firestore, "users");
                const q = query(usersRef, where("uid", "not-in", [authUser.uid, ...authUser.following]),
                    orderBy("uid"),//query for getting the users other than followed and self
                    limit(3))

                const snapshot = await getDocs(q);//getting the dat
                const users = [];
                snapshot.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id }); //geting the uid from the docs and adding in users array
                });
                setSuggestedUsers(users);

            }
            catch (err) {
                showToast("error", err.message, "error")
            }
            finally {
                setisLoading(false);
            }
        }
        if(authUser) getSuggestedUsers();

    },[authUser,showToast])
    return {suggestedUsers,isLoading}
}

export default useGetSuggestedUser
