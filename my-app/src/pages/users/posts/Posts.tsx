import { useContext } from 'react';
import { useGetPostsQuery } from '@entities/entity/api/postsApi';
import style from '@widgets/PostList/postList.module.css'
import styles from '@shared/ui/Button/button.module.css'
import { ThemeContext, type ThemeContextType } from '@shared/lib/theme/ThemeContext';
import Button from '@shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

function Posts() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { data } = useGetPostsQuery()
	const posts = data || []

	const navigate = useNavigate()
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			<Button onclick={() => navigate(-1)} children={"Назад"} styles={styles.button__navigate} />
			{
				posts.map((post) => (
					<div key={post.id}>{post.title}</div>
				))
			}
		</div>
	)
}

export default Posts