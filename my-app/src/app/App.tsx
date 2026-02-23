import ThemeProvider from '../shared/lib/theme/ThemeProvider'
import '../app/styles/index.css'
import { Outlet } from 'react-router-dom'
import UserTabs from '../widgets/UserTabs/UserTabs'
import Header from '../widgets/LayoutHeader/Header'
import PostList from '../widgets/PostList/PostList'
import withLoading from '../shared/lib/hoc/withLoading'

const PostListWithLoading = withLoading(PostList)

function App() {
  return (
    <ThemeProvider>
      <Header />
      <UserTabs />
      <PostListWithLoading />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
