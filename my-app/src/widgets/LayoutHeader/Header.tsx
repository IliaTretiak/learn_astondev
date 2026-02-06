import { useState } from 'react'
import ButtonInfo from '../../shared/ui/Button/ButtonInfo'
import ModalInfo from '../../shared/ui/Modal/ModalInfo'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import style from './header.module.css'

function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className={style.header}>
			<ButtonInfo onOpen={() => setIsOpen(!isOpen)} />
			{isOpen ? <ModalInfo /> : ''}
			<ThemeSwitcher />
		</div>
	)
}

export default Header

