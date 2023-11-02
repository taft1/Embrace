import React from 'react'

const Home = ({ authToken }) => {
  return (
    <div>
      <h1>Welcome to Embrace</h1>
      {authToken && <p>Your authentication token: {authToken}</p>}
      {/* Add other content or components as needed */}
    </div>
  )
}

export default Home
