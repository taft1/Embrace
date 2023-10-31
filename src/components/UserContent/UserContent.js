import React from 'react'
import sanitize from '../utils/sanitizer'
import User from '../api/models/user'

const UserContent = ({ content }) => {
  const sanitizedContent = sanitize(content)

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
}

export default UserContent
