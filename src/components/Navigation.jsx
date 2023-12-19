import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-slate-100 max-w-2xl mx-auto my-4 p-4 rounded">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
