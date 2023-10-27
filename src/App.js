import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Registration from "./components/Registration";

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/login"
          render={() =>
            authToken ? (
              <Redirect to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/home"
          render={() =>
            authToken ? (
              <Home authToken={authToken} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        {/* ... other routes */}
      </Switch>
    </Router>
  );
};

export default App;
