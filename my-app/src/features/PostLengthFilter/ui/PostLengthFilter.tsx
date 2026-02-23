import { type ChangeEvent, type MouseEvent } from 'react'
import styles from './postFilter.module.css'

type PostListProps = {
	setLength: (value: string) => void
	children: string
}

function PostLengthFilter({ setLength, children }: PostListProps) {
	function changeLength(e: ChangeEvent) {
		const value: string | undefined = (e.target as HTMLInputElement).value
		setLength(value)
	}
	function sendCalculation(e: MouseEvent) {
		e.preventDefault()
	}

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