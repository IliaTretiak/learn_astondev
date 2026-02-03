interface PostCardProps {
	post: {
		userId: number,
		id: number,
		title: string,
		body: string
	}
}

function PostCard({ post }: PostCardProps) {
	return (
		<div>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	)
}

export default PostCard