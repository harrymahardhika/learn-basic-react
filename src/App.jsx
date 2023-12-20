import { Outlet } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <Navigation />

      <Outlet />

      <ToastContainer
        theme="colored"
        hideProgressBar="true"
        autoClose="3000"
        draggable="false"
        transition={Slide}
      />
    </>
  )
}

export default App
