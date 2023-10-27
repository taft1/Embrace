import React from "react";

const Home = ({ authToken }) => {
  if (!authToken) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Welcome to Embrace Login</h2>
    </div>
  );
};

export default Home;
