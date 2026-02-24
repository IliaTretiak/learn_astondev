import { createEntityAdapter, createSlice, type EntityState } from '@reduxjs/toolkit';
import type { Post } from '../../../../widgets/PostList/PostList';

interface PostState extends EntityState<Post, number> {
	status: "idle" | "loading" | "succeeded" | "failed";
}

interface RootState {
	post: PostState;
}

const postAdapter = createEntityAdapter<Post>()

const postSlice = createSlice({
	name: "post",
	initialState: postAdapter.getInitialState({ status: "idle" }),
	reducers: {
		postReceived: postAdapter.setAll,
	},
})

export const { postReceived } = postSlice.actions

export const {
	selectAll: selectAllPost,
	selectById: selectPostById
} = postAdapter
	.getSelectors((state: RootState) => state.post)

export default postSlice.reducer


// const allPosts = useSelector(selectAllPost)
// const onePost = useSelector((state) => selectPostById(state, postId))


