import Header from "../../widgets/LayoutHeader/Header"
import Footer from "../../widgets/LayoutFooter/Footer"
import PostList from '../../widgets/PostList/PostList'

function MainLayout() {
	return (
		<>
			<Header />
			<PostList />
			<Footer />
		</>

	)
}

export default MainLayout
