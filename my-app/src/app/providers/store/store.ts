import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '../../../entities/[entity]/api/postsApi';
// import { setupListeners } from '@reduxjs/toolkit/query';
import postReducer from '../../../entities/[entity]/model/slice/postSlice';
// import { albumsApi } from '../../../entities/[entity]/api/albumsApi';
// import { todosApi } from '../../../entities/[entity]/api/todosApi';
// import { commentApi } from '../../../entities/[entity]/api/commentsApi';


export const store = configureStore({
	reducer: {
		[postApi.reducerPath]: postApi.reducer,
		// [albumsApi.reducerPath]: albumsApi.reducer,
		// [todosApi.reducerPath]: todosApi.reducer,
		// [commentApi.reducerPath]: commentApi.reducer,
		post: postReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			postApi.middleware,
			// albumsApi.middleware,
			// todosApi.middleware,
			// commentApi.middleware
		)
})

// setupListeners(store.dispatch)
