import { useContext } from 'react';
import { useGetPostsQuery } from '../../../entities/[entity]/api/postsApi';
import style from '../../../widgets/PostList/postList.module.css'
import { ThemeContext, type ThemeContextType } from '../../../shared/lib/theme/ThemeContext';

function Posts() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { data } = useGetPostsQuery()
	const posts = data || []
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			{
				posts.map((post) => (
					<div key={post.id}>{post.title}</div>
				))
			}
		</div>
	)
}

export default Posts