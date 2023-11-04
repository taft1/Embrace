import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import sanitize from '../../utils/sanitizer'

const UserContent = ({ content }) => {
  const sanitizedContent = sanitize(content)

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
}

// Add prop-types validation
UserContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default UserContent
