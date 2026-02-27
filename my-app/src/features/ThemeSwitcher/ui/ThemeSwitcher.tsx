import { useContext } from 'react'
import Button from '../../../shared/ui/Button/Button'
import { ThemeContext, type ThemeContextType } from '../../../shared/lib/theme/ThemeContext'
import style from '../../../shared/ui/Button/button.module.css'

function ThemeSwitcher() {
	const { toggleTheme } = useContext(ThemeContext) as ThemeContextType
	const styles: string = style.button
	return (
		<div>
			<Button styles={styles} onclick={toggleTheme} children={"Переключить тему"} />
		</div>
	)
}

export default ThemeSwitcher