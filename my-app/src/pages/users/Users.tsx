import { useSelector } from 'react-redux'
import style from '../../widgets/PostList/postList.module.css'
import { NavLink, useParams } from 'react-router-dom'
import styles from '../../widgets/UserTabs/userTabs.module.css'
import { selectAllUser } from '../../entities/[entity]/model/slice/userSlice'
import UserTabs from '../../widgets/UserTabs/UserTabs'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from '../../shared/lib/theme/ThemeContext'

function Users() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { id } = useParams()
	const allPosts = useSelector(selectAllUser)
	const routs = ["albums", "todos", "posts"]
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			{id ?
				<div>
					<UserTabs routs={routs} />
					<p>user id {id}</p>
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

export default Users