import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { login } from './authActions'
import { createRoot } from 'react-dom/client'

const RootComponent = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const authToken = auth ? auth.authToken : null

  const handleLogin = (token) => {
    dispatch(login(token))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            authToken ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/home"
          element={
            authToken ? (
              <Home authToken={authToken} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  const container = document.getElementById('root')
  const root = createRoot(container)

  // Use root.render() to render your application
  root.render(<RootComponent />)
}

export default App
