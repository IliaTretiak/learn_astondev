import { useContext } from 'react'
import { ThemeContext } from '../../../shared/lib/theme/ThemeProvider'

function ThemeSwitcher(): any {
	//перепроверить типы
	const { toggleTheme }: any = useContext(ThemeContext)
	return (
		<div>
			<button onClick={toggleTheme} > Переключить тему </button>
		</div>
	)
}

export default ThemeSwitcher