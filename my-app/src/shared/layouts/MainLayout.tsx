import Header from "../../widgets/LayoutHeader/Header"
import Footer from "../../widgets/LayoutFooter/Footer"
import PostCard from '../../entities/post/ui/PostCard'

function MainLayout() {
	return (
		<>
			<Header />
			<PostCard />
			<Footer />
		</>

	)
}

export default MainLayout
