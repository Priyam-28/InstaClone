import { create } from "zustand";

const useUserProfileStore = create((set) => ({
	userProfile: null,
	setUserProfile: (userProfile) => set({ userProfile }),
	// this is used to update the number of posts in the profile page
	addPost: (post) =>
		set((state) => ({
			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
			//state is used to keep tract of the state and like in posts add posts in front and then the post.id called from the addPost method
		})),
	deletePost: (postId) =>
		set((state) => ({
			userProfile: {
				...state.userProfile,
				posts: state.userProfile.posts.filter((id) => id !== postId),

				//basic js filter
			},
		})),
}));

export default useUserProfileStore;
