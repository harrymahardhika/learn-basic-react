import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import AboutPage from './pages/AboutPage'
import BookDetailsPage from './pages/BookDetailsPage'
import BooksPage from './pages/BooksPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/errors/NotFound'

const Router = () => {
  return (
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
  )
}

export default Router
