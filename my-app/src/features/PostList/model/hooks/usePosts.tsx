import { useGetPostsQuery } from '../../../../entities/[entity]/api/postsApi'

function usePosts() {
	const { data } = useGetPostsQuery()
	const posts = data || []

	return posts
}

export default usePosts