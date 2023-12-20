import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

const Navigation = () => {
  const { user } = useContext(AuthContext)

  const [links, setLinks] = useState([
    { name: 'Home', path: '/' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
    { name: 'Books', path: 'books' },
  ])

  // useEffect(() => {
  //   console.log(user)
  //   setLinks([...links, { name: user.name, path: 'profile' }])
  // }, [user, links, setLinks])

  return (
    <nav className="bg-slate-100 max-w-2xl mx-auto my-4 p-4 rounded flex content-between">
      <div className="font-bold">App Name </div>
      <div className="block text-right grow">
        {links.map((link) => (
          <div key={link.name} className="inline-block ml-2">
            <Link to={link.path} className="py-1 px-2 hover:bg-slate-200 rounded">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
