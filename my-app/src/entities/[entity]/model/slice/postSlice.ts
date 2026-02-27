import { createEntityAdapter, createSlice, type EntityState } from '@reduxjs/toolkit';
import type { Post } from '../types';
import { postApi } from '../../api/postsApi';

interface PostState extends EntityState<Post, number> {
	status: "idle";
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
	extraReducers: (builder) => {
		builder
			.addMatcher(postApi.endpoints.getPosts.matchFulfilled, (state, action) => {
				postAdapter.setAll(state, action.payload);
			})
	},
})

export const { postReceived } = postSlice.actions
export default postSlice.reducer

export const {
	selectAll: selectAllPost,
	selectById: selectPostById
} = postAdapter
	.getSelectors((state: RootState) => state.post)
