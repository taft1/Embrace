import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful login
    const fakeAuthToken = "your_fake_jwt_token";
    onLogin(fakeAuthToken);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (input fields) */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
