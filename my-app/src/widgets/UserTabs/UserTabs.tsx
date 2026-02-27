import { NavLink } from 'react-router-dom'
import styles from './userTabs.module.css'
import type { PropsWithChildren } from 'react'
import type { RoutsProps } from '../../entities/[entity]/model/types'

function UserTabs(props: PropsWithChildren<RoutsProps>) {

	return (
		<div className={styles.userTabs}>
			{
				props.routs.map((rout: string) => (
					<NavLink className={styles.userTabs_link} key={rout.toString()} to={rout}>{rout}</NavLink>
				))
			}
		</div>

	)
}

export default UserTabs