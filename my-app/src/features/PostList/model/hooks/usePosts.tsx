import { useEffect, useState } from 'react'
import type { Post } from '../../../../widgets/PostList/PostList';

function usePosts(fetchData: string) {
	const [posts, setPosts] = useState<Post[]>([])
	useEffect(() => {
		fetch(fetchData)
			.then((res) => res.json())
			.then((json) => {
				setPosts(json)
			})
	}, [fetchData])

	return posts
}

export default usePosts