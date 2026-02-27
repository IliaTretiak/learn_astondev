import type { CrossProps } from '../../../entities/[entity]/model/types'
import style from "./button.module.css"
import type { PropsWithChildren } from 'react'

function Cross(props: PropsWithChildren<CrossProps>) {
	return (
		<svg className={style.button} onClick={props.onclick} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.5 1.00079L7.5 8.00079M7.5 8.00079L14.5 15.0008M7.5 8.00079L0.5 15.0008M7.5 8.00079L14.5 1.00079" stroke="#303030" />
		</svg>
	)
}

export default Cross


