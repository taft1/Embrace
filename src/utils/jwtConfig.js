import decode from 'jsonwebtoken/decode'
import verify from 'jsonwebtoken/verify'
import sign from 'jsonwebtoken/sign'
import JsonWebTokenError from 'jsonwebtoken/lib/JsonWebTokenError'
import NotBeforeError from 'jsonwebtoken/lib/NotBeforeError'
import TokenExpiredError from 'jsonwebtoken/lib/TokenExpiredError'
const jwtDecode = require('jwt-decode')

export {
  decode,
  verify,
  sign,
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
}
module.exports = {
  decodeToken: (token) => {
    try {
      return jwtDecode(token)
    } catch (error) {
      console.error('Error decoding token:', error)
      return null
    }
  },
}
