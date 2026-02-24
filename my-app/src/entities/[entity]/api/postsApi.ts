import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../../../widgets/PostList/PostList';

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			query: () => "posts",
		}),
	}),
})

export const { useGetPostsQuery } = postApi;
