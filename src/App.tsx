import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import GlobalSyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <GlobalSyles />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
