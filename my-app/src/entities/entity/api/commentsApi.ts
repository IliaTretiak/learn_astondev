import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../model/types';

export const commentApi = createApi({
	reducerPath: "commentApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getComments: builder.query<Post[], void>({
			query: () => "users/1/albums",
		}),
	}),
})

export const { useGetCommentsQuery } = commentApi;