import PostCard from '../../entities/post/ui/PostCard'
import { Fragment, useMemo, useState } from 'react'
import style from './postList.module.css'
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter'
import filterByLength from '../../features/PostLengthFilter/lib/filterByLength'
import usePosts from '../../features/PostList/model/hooks/usePosts'

export interface Post {
	userId: number,
	id: number,
	title: string,
	body: string,
}

function PostList() {
	const posts = usePosts()

	const [length, setLength] = useState<string>("0")

	const filterPosts = useMemo(() => {
		return filterByLength(length, posts)
	}, [posts, length])

	return (
		<div className={style.postList}>
			<PostLengthFilter
				setLength={(e) => setLength(e)}
				children={"Фильтр по длине заголовка"
				} />
			{
				filterPosts.map((post) => (
					<Fragment key={post.id}>
						<PostCard post={post} />
					</Fragment>
				))
			}
		</div>
	)
}

export default PostList