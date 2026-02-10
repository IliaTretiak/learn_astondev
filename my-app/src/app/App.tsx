import MainLayout from '../shared/layouts/MainLayout'
import ThemeProvider from '../shared/lib/theme/ThemeProvider'
import '../app/styles/index.css'

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
