import { useSelector } from 'react-redux'
import style from '@widgets/PostList/postList.module.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import styles from '@widgets/UserTabs/userTabs.module.css'
import styles_button from '@shared/ui/Button/button.module.css'
import { selectAllUser } from '@entities/entity/model/slice/userSlice'
import UserTabs from '@widgets/UserTabs/UserTabs'
import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from '@shared/lib/theme/ThemeContext'
import Button from '@shared/ui/Button/Button'

function Users() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const { id } = useParams()
	const allPosts = useSelector(selectAllUser)
	const routs = [
		{
			id: 1,
			rout: "albums",
			title: "Альбомы"
		},
		{
			id: 2,
			rout: "todos",
			title: "Заметки"
		},
		{
			id: 3,
			rout: "posts",
			title: "Посты"
		}
	]
	const navigate = useNavigate()
	return (
		<div className={`${className} ${style.page} ${style.postList}`}>
			{id ?
				<div>
					<UserTabs routs={routs} />
					<p>user id {id}</p>
					<Button onclick={() => navigate(-1)} children={"Назад"} styles={styles_button.button__navigate} />
				</div>
				:
				allPosts.map((post) => (
					<NavLink
						className={styles.userTabs_link}
						to={`${post.id}`}
						key={post.id}>
						{post.title}
					</NavLink>
				))
			}

		</div>
	)
}

export default Users