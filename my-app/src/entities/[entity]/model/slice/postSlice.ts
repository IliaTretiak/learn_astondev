import { createEntityAdapter, createSlice, type EntityState } from '@reduxjs/toolkit';
import { postApi } from '../../api/postsApi';
import type { ItemList } from '@shared/ui/ItemList/ItemList';

interface PostState extends EntityState<ItemList<string, number>, number> {
	status: "idle";
}

interface RootState {
	post: PostState;
}

const postAdapter = createEntityAdapter<ItemList<string, number>>()

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
