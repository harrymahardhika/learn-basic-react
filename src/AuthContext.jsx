import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  user: null,
  setUser: () => {},
})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser({ name: 'John Doe' })
  }, [setUser])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AuthContext, AuthProvider }
