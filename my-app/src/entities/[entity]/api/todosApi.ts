import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../model/types';

export const todosApi = createApi({
	reducerPath: "todosApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getTodos: builder.query<Post[], number>({
			query: (userId) => `users/${userId}/todos`,
		}),
	}),
})

export const { useGetTodosQuery } = todosApi;
