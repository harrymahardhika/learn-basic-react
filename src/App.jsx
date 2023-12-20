import { Outlet } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import { AuthProvider } from './AuthContext'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <AuthProvider>
      <Navigation />

      <Outlet />

      <ToastContainer
        theme="colored"
        hideProgressBar="true"
        autoClose="3000"
        draggable="false"
        transition={Slide}
      />
    </AuthProvider>
  )
}

export default App
