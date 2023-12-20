import { Outlet } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import { AuthProvider } from './AuthContext'
import Navigation from './components/Navigation'
import { LocaleProvider } from './LocaleContext'

const App = () => {
  return (
    <AuthProvider>
      <LocaleProvider>
        <Navigation />

        <Outlet />

        <ToastContainer
          theme="colored"
          hideProgressBar="true"
          autoClose="3000"
          draggable="false"
          transition={Slide}
        />
      </LocaleProvider>
    </AuthProvider>
  )
}

export default App
