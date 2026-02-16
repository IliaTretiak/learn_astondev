import ThemeProvider from '../shared/lib/theme/ThemeProvider'
import '../app/styles/index.css'
import { Outlet } from 'react-router-dom'
import UserTabs from '../widgets/UserTabs/UserTabs'
import Header from '../widgets/LayoutHeader/Header'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <UserTabs />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
