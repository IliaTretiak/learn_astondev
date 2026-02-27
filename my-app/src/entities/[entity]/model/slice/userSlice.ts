import { createEntityAdapter, createSlice, type EntityState } from '@reduxjs/toolkit';
import type { Post } from '../types';
import { commentApi } from '../../api/commentsApi';

interface PostState extends EntityState<Post, number> {
	status: "idle";
}

interface RootState {
	post: PostState;
}

const userAdapter = createEntityAdapter<Post>()

const userSlice = createSlice({
	name: "user",
	initialState: userAdapter.getInitialState({ status: "idle" }),
	reducers: {
		userReceived: userAdapter.setAll,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(commentApi.endpoints.getComments.matchFulfilled, (state, action) => {
				userAdapter.setAll(state, action.payload);
			})
	},
})

export const { userReceived } = userSlice.actions
export default userSlice.reducer

export const {
	selectAll: selectAllUser,
	selectById: selectUserById
} = userAdapter
	.getSelectors((state: RootState) => state.post)



