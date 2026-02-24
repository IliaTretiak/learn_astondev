import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../../../widgets/PostList/PostList';

export const albumsApi = createApi({
	reducerPath: "albumsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (builder) => ({
		getAlbums: builder.query<Post[], void>({
			query: () => "albums",
		}),
	}),
})

export const { useGetAlbumsQuery } = albumsApi;
