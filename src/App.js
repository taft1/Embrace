import React from 'react'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { login } from './authActions'

const App = () => {
  const dispatch = useDispatch()
  const authToken = useSelector((state) => state.auth.authToken)

  const handleLogin = (token) => {
    dispatch(login(token))
  }

  return (
    <BrowserRouter>
      <Route
        path="/login"
        element={
          authToken ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
        }
      />
      <Route
        path="/home"
        element={
          authToken ? <Home authToken={authToken} /> : <Navigate to="/login" />
        }
      />
    </BrowserRouter>
  )
}

export default App
