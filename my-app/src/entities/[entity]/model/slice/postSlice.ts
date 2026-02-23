import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { postApi, useGetPostsQuery } from '../../api/postsApi';
import type { Post } from '../../../../widgets/PostList/PostList';

// interface PostsState {
// 	status: 'idle' | 'loading' | 'failed';
// 	entities: Record<number, Post>;
// }

const postAdapter = createEntityAdapter<Post>()

// const initialState: PostsState = {
// 	status: 'idle',
// 	entities: {},
// };

const postSlice = createSlice({
	name: "post",
	// initialState: postAdapter.getInitialState(initialState),
	initialState: postAdapter.getInitialState({ status: "idle" }),
	reducers: {
		postAdded: postAdapter.addOne,
		postUpdate: postAdapter.updateOne,
		postReceived: postAdapter.setAll,
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addMatcher(postApi.endpoints.getPosts.matchFulfilled,
	// 			(state, action: any) => {
	// 				postAdapter.setAll(action.payload, state);
	// 				// state.status = 'idle';
	// 			})
	// 	// .addMatcher(postApi.endpoints.getPosts.matchPending, (state) => {
	// 	// 	state.status = 'loading';
	// 	// })
	// 	// .addMatcher(postApi.endpoints.getPosts.matchRejected, (state) => {
	// 	// 	state.status = 'failed';
	// 	// });
	// },

})

export const { postAdded, postUpdate, postReceived } = postSlice.actions
export const {
	selectAll: selectAllPost,
	selectById: selectPostById
} = postAdapter
	.getSelectors((state: any) => state.post)

export default postSlice.reducer


// const allPosts = useSelector(selectAllPost)
// const onePost = useSelector((state) => selectPostById(state, postId))


