import type { ButtonProps } from '../../../entities/[entity]/model/types'
import type { PropsWithChildren } from 'react'
import styles from './button.module.css'

function Button(props: PropsWithChildren<ButtonProps>) {
	return (
		<button className={`${props.styles} ${styles.button}`} onClick={props.onclick}>{props.children}</button>
	)
}

export default Button


