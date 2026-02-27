import Footer from "../../widgets/LayoutFooter/Footer"
import { useContext } from 'react'
import style from './mainLayout.module.css'
import { ThemeContext, type ThemeContextType } from '../lib/theme/ThemeContext'
import PostList from '../../widgets/PostList/PostList'
import withLoading from '../lib/hoc/withLoading'

const PostListWithLoading = withLoading(PostList)

function MainLayout() {
	const { theme } = useContext(ThemeContext) as ThemeContextType
	const className = 'theme__main-' + theme

	return (
		<div className={`${className} ${style.page}`}>
			<PostListWithLoading />
			<Footer />
		</ div>

	)
}

export default MainLayout
