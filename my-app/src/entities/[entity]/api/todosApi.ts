import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../../../widgets/PostList/PostList';

export const todosApi = createApi({
	reducerPath: "todosApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getTodos: builder.query<Post[], void>({
			query: () => "todos",
		}),
	}),
})

export const { useGetTodosQuery } = todosApi;
