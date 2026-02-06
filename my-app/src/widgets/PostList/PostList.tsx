import PostCard from '../../entities/post/ui/PostCard'
import { Fragment } from 'react'
import style from './postList.module.css'

interface Post {
	userId: number,
	id: number,
	title: string,
	body: string
}

const postsList: Post[] = [
	{
		userId: 1,
		id: 1,
		title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
		body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'
	},
	{
		userId: 1,
		id: 2,
		title: 'qui est esse',
		body: 'est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla'
	},
	{
		userId: 1,
		id: 3,
		title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
		body: 'et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut'
	},
	{
		userId: 1,
		id: 4,
		title: 'eum et est occaecati',
		body: 'ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit'
	},
	{
		userId: 1,
		id: 5,
		title: 'nesciunt quas odio',
		body: 'repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque'
	}
]

// let postsList: Post[] = []

// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((response) => response.json())
// 	.then((json) => {
// 		postsList.push(json)
// 	});

function PostList() {
	return (
		<div className={style.postList}>
			{
				postsList.map((post) => (
					<Fragment key={post.id}>
						<PostCard post={post} />
					</Fragment>
				))
			}
		</div>
	)
}

export default PostList