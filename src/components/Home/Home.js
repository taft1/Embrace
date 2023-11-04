import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ authToken }) => {
  return (
    <div>
      <h1>Welcome to Embrace</h1>
      {authToken && <p>Your authentication token: {authToken}</p>}
      {/* Add other content or components as needed */}
    </div>
  )
}

Home.propTypes = {
  authToken: PropTypes.string,
  // Add other prop types as needed
}

export default Home
