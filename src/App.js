import React, { useState } from 'react'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

const App = () => {
  const [authToken, setAuthToken] = useState(null)

  const handleLogin = (token) => {
    setAuthToken(token)
  }

  return (
    <BrowserRouter>
      <Route path="/login" element={authToken ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
      <Route path="/home" element={authToken ? <Home authToken={authToken} /> : <Navigate to="/login" />} />
    </BrowserRouter>
  )
}

export default App
