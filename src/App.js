// App.js

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home.js';

const jwt = require('jsonwebtoken');

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  return (
    <Router>
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
        {/* ... other routes */}
      </Routes>
    </Router>
  );
};

export default App;
