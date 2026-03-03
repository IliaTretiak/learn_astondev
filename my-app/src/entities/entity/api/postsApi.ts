import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../model/types';

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			query: () => "posts",
		}),
		// addPost: builder.mutation({
		// 	query: (post) => ({
		// 		url: "posts",
		// 		method: "POST",
		// 		body: post
		// 	}),
		// 	// invalidatesTags: ["Posts"]
		// })
	}),
})

export const { useGetPostsQuery } = postApi;
