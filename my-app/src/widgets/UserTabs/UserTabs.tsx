import { NavLink } from 'react-router-dom'
import styles from './userTabs.module.css'

function UserTabs() {
	const routs = ["/", "posts", "/users/id/albums", "/albums/id/photos", "/users/id/todos", "/users/id/posts"]

	return (
		<div className={styles.userTabs}>
			{
				routs.map((rout: string) => (
					<NavLink className={styles.userTabs_link} key={rout.toString()} to={rout}>{rout}</NavLink>
				))
			}
		</div>

	)
}

export default UserTabs