import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  )
}

export default PrivateRoute
