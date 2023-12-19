import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  useEffect(() => {
    console.log('Navigation component mounted')

    return () => {
      console.log('Navigation component unmounted')
    }
  }, [])

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ]

  return (
    <nav className="bg-slate-100 max-w-2xl mx-auto my-4 p-4 rounded flex content-between">
      <div className="font-bold">App Name</div>
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
