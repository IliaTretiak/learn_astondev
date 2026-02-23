import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '../../../entities/[entity]/api/postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import postReducer from '../../../entities/[entity]/model/slice/postSlice';


export const store = configureStore({
	reducer: {
		[postApi.reducerPath]: postApi.reducer,
		post: postReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postApi.middleware)
})

setupListeners(store.dispatch)
