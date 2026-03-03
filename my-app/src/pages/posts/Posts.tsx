import { useSelector } from 'react-redux'
import { selectAllPost } from '@entities/entity/model/slice/postSlice'
import style from '@widgets/PostList/postList.module.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import styles from '@widgets/UserTabs/userTabs.module.css'
import styles_button from '@shared/ui/Button/button.module.css'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from '@shared/lib/theme/ThemeContext'
import Button from '@shared/ui/Button/Button'

function Posts() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { id } = useParams()
	const allPosts = useSelector(selectAllPost)

	const navigate = useNavigate()
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			{id ?
				<div>
					<p>post id {id}</p>
					<Button onclick={() => navigate(-1)} children={"Назад"} styles={styles_button.button__navigate} />
				</div>
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