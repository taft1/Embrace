import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types' // Import PropTypes

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken') || null
  )

  const login = (token) => {
    setAuthToken(token)
    localStorage.setItem('authToken', token)
  }

  const logout = () => {
    setAuthToken(null)
    localStorage.removeItem('authToken')
  }

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Add PropTypes validation
}

export const useAuth = () => {
  return useContext(AuthContext)
}
