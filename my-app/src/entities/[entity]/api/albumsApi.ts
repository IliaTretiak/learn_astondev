import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../model/types';

export const albumsApi = createApi({
	reducerPath: "albumsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getAlbums: builder.query<Post[], number>({
			query: (page) => `users/${page}/albums`,
		}),
	}),
})

export const { useGetAlbumsQuery } = albumsApi;
