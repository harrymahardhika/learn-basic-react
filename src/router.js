import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/errors/NotFound'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BooksPage from './pages/BooksPage'
import BookDetailsPage from './pages/BookDetailsPage'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { path: '', Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      {
        path: 'books',
        children: [
          {
            path: '',
            Component: BooksPage,
          },
          {
            path: ':id',
            Component: BookDetailsPage,
          },
        ],
      },
      { path: '404', Component: NotFound },
      { path: '*', Component: NotFound },
    ],
  },
])

export default router
