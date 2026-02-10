import Header from "../../widgets/LayoutHeader/Header"
import Footer from "../../widgets/LayoutFooter/Footer"
import PostList from '../../widgets/PostList/PostList'
import { useContext } from 'react'
import style from './mainLayout.module.css'
import { ThemeContext, type ThemeContextType } from '../lib/theme/ThemeContext'

function MainLayout() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme
	return (
		<div className={`${className} ${style.page}`}>
			<Header />
			<PostList />
			<Footer />
		</ div>

	)
}

export default MainLayout
