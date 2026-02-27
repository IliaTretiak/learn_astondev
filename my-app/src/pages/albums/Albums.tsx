import { useSelector } from 'react-redux';
import { selectAllPost } from '../../entities/[entity]/model/slice/postSlice';

function Albums() {
	const allPosts = useSelector(selectAllPost)

	return (
		<div>123
			{/* {
				allPosts.map((post) => (
					<div key={post.id}>{post.body}</div>
				))
			} */}
		</div>
	)
}

export default Albums