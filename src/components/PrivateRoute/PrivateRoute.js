// PrivateRoute.js
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authToken } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken ? <Component {...props} /> : <Navigate to="/login" replace />
      }
    />
  )
}

export default PrivateRoute
