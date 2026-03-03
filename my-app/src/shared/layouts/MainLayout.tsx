import Header from "../../widgets/LayoutHeader/Header"
import Footer from "../../widgets/LayoutFooter/Footer"
import PostList from '../../widgets/PostList/PostList'
import { useContext } from 'react'
import style from './mainLayout.module.css'
import { ThemeContext, type ThemeContextType } from '../lib/theme/ThemeContext'
import withLoading from '../lib/hoc/withLoading'

function MainLayout() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme
	const PostListWithLoading = withLoading(PostList)

	return (
		<div className={`${className} ${style.page}`}>
			<Header />
			<PostListWithLoading />
			<Footer />
		</ div>

	)
}

export default MainLayout
