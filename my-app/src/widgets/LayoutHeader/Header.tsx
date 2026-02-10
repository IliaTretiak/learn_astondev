import { useState } from 'react'
import Button from '../../shared/ui/Button/Button'
import ModalInfo from '../../shared/ui/Modal/ModalInfo'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import style from './header.module.css'
import style__button from '../../shared/ui/Button/button.module.css'


function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const styles: string = style__button.button
	return (
		<div className={style.header}>
			<Button styles={styles} onclick={() => setIsOpen(!isOpen)} children={"О проекте"} />
			{isOpen ? <ModalInfo onclick={() => setIsOpen(!isOpen)} /> : ''}
			<ThemeSwitcher />
		</div>
	)
}

export default Header

