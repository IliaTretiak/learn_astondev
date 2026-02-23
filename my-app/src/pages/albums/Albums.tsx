import { useSelector } from 'react-redux';
import { selectAllPost } from '../../entities/[entity]/model/slice/postSlice';
import usePosts from '../../features/PostList/model/hooks/usePosts';

function Albums() {
	const allPosts = usePosts()

	// const allPosts = useSelector(selectAllPost)

	return (
		<div>
			{
				allPosts.map((post) => (
					<div key={post.id}>{post.body}</div>
				))
			}
		</div>
	)
}

export default Albums