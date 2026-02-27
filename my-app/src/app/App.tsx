import ThemeProvider from '../shared/lib/theme/ThemeProvider'
import '../app/styles/index.css'
import { Outlet } from 'react-router-dom'
import Header from '../widgets/LayoutHeader/Header'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
