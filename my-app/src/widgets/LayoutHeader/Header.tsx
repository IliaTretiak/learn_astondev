import { useState } from 'react'
import Button from '../../shared/ui/Button/Button'
import Modal from '../../shared/ui/Modal/Modal'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import style from './header.module.css'
import style__button from '../../shared/ui/Button/button.module.css'

function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const styles: string = style__button.button
	return (
		<div className={style.header}>
			<Button styles={styles} onclick={() => setIsOpen(true)} children={"О проекте"} />
			<Modal isOpen={isOpen} onclick={() => setIsOpen(!isOpen)}>
				<Modal.Header>
					<h2>О проекте</h2>
				</Modal.Header>
				<Modal.Body>
					<p>Это учебный проект в рамках интенсива по React компании Astons</p>
				</Modal.Body>
				<Modal.Footer>
					<p>выполняет Третьяк Илья</p>
				</Modal.Footer>
			</Modal>
			<ThemeSwitcher />
		</div>
	)
}

export default Header

