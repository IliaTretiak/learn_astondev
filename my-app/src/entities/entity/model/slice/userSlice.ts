import { createEntityAdapter, createSlice, type EntityState } from '@reduxjs/toolkit';
import { commentApi } from '../../api/commentsApi';
import type { ItemList } from '@shared/ui/ItemList/ItemList';

interface PostState extends EntityState<ItemList<string, number>, number> {
	status: "idle";
}

interface RootState {
	post: PostState;
}

const userAdapter = createEntityAdapter<ItemList<string, number>>()

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



