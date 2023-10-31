import React from 'react'
import PropTypes from 'prop-types'
import sanitize from '../utils/sanitizer'

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
  bio: propTypes.string.isRequired,
}

export default UserProfile
