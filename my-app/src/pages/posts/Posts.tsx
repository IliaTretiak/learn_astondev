import { useSelector } from 'react-redux'
import { selectAllPost, selectPostById } from '../../entities/[entity]/model/slice/postSlice'
import style from '../../widgets/PostList/postList.module.css'
import { NavLink, useParams } from 'react-router-dom'
import styles from '../../widgets/UserTabs/userTabs.module.css'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from '../../shared/lib/theme/ThemeContext'

function Posts() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { id } = useParams()
	const allPosts = useSelector(selectAllPost)
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			{id ?
				<p>post id {id}</p>
				:
				allPosts.map((post) => (
					<NavLink
						className={styles.userTabs_link}
						to={`${post.id}`}
						key={post.id}>
						{post.body}
					</NavLink>
				))
			}

		</div>
	)
}

export default Posts