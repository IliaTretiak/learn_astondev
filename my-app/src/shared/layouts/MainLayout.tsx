import Footer from "../../widgets/LayoutFooter/Footer"
import { useContext } from 'react'
import style from './mainLayout.module.css'
import { ThemeContext, type ThemeContextType } from '../lib/theme/ThemeContext'

function MainLayout() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	return (
		<div className={`${className} ${style.page}`}>
			<Footer />
		</ div>

	)
}

export default MainLayout
