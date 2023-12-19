import { Slide, ToastContainer } from 'react-toastify'
import Router from './Router'

const App = () => {
  return (
    <>
      <Router />

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
