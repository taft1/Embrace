import React from 'react'
import PropTypes from 'prop-types' // Correct import

const UserProfile = ({ username, bio }) => {
  return (
    <div>
      <h2>{sanitize(username)}</h2>
      <p>{sanitize(bio)}</p>
    </div>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired, // Fix the typo here
}

export default UserProfile
