import { useContext, useState } from 'react'
import Button from '../../shared/ui/Button/Button'
import Modal from '../../shared/ui/Modal/Modal'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import style from './header.module.css'
import style__button from '../../shared/ui/Button/button.module.css'
import UserTabs from '../UserTabs/UserTabs'
import { ThemeContext, type ThemeContextType } from '../../shared/lib/theme/ThemeContext'

function Header() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const styles: string = style__button.button
	const routs = ["/", "posts", "users"]

	return (
		<div className={`${className} ${style.page} ${style.header__container}`}>
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
			<UserTabs routs={routs} />
		</div>

	)
}

export default Header

