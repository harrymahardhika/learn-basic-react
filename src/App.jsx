import { Slide, ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navigation from './components/Navigation'
import ContactPage from './pages/ContactPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BooksPage from './pages/BooksPage'
import BookDetailsPage from './pages/BookDetailsPage'
import NotFound from './pages/errors/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="books/:id" element={<BookDetailsPage />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

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
