// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { authToken } = useAuth();

  return (
    <Route
      {...rest}
      element={authToken ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
