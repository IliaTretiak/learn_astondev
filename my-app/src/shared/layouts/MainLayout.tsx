import Header from "../../widgets/LayoutHeader/Header"
import Footer from "../../widgets/LayoutFooter/Footer"
import PostList from '../../widgets/PostList/PostList'
import { useContext } from 'react'
import { ThemeContext } from '../lib/theme/ThemeProvider'
import style from './mainLayout.module.css'

function MainLayout() {
	//перепроверить тип
	const { theme }: any = useContext(ThemeContext)
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
