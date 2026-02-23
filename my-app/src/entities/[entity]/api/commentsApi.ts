import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../../../widgets/PostList/PostList';

export const commentApi = createApi({
	reducerPath: "commentApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getComments: builder.query<Post[], void>({
			query: () => "comments",
		}),
	}),
})

export const { useGetCommentsQuery } = commentApi;