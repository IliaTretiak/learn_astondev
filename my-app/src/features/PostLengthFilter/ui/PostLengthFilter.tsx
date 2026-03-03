import { type ChangeEventHandler, type MouseEventHandler } from 'react'
import styles from './postFilter.module.css'

type PostListProps = {
	changeLength: ChangeEventHandler
	children: string
	sendCalculation: MouseEventHandler
}

function PostLengthFilter({ changeLength, children, sendCalculation }: PostListProps) {
	return (
		<div className={styles.postFilter}>
			<form>
				<fieldset className={styles.postFilter__fieldset}>
					<legend>{children}</legend>
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