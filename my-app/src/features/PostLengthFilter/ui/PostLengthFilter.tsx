import { type ChangeEvent, type MouseEvent } from 'react'
import styles from './postFilter.module.css'
import type { PostListProps } from '../../../entities/[entity]/model/types'
import type { PropsWithChildren } from 'react'

function PostLengthFilter(props: PropsWithChildren<PostListProps>) {
	function changeLength(e: ChangeEvent) {
		const value: string | undefined = (e.target as HTMLInputElement).value
		props.setLength(value)
	}
	function sendCalculation(e: MouseEvent) {
		e.preventDefault()
	}

	return (
		<div className={styles.postFilter}>
			<form>
				<fieldset className={styles.postFilter__fieldset}>
					<legend>{props.children}</legend>
					<input
						className={styles.postFilter__input}
						type='number'
						placeholder='Введите число'
						onChange={(e) => changeLength(e)} />
					<button
						className={styles.postFilter__inputButton}
						onClick={(e) => sendCalculation(e)}
						type='submit'
					></button>
				</fieldset>
			</form>
		</div>
	)
}

export default PostLengthFilter