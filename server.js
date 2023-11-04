const express = require('express')
const helmet = require('helmet')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const jwtSecret = process.env.JWT_SECRET || 'your_real_jwt_secret'

const users = [
  {
    id: 1,
    username: 'test',
    password: '$2b$10$GZsPUpgofz.Zi.UOeYGtUuc/5FQu.G2geuz.VMN0PmLUrRyfyv9om', // hashed "password"
  },
]

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    },
  })
)

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    const user = users.find((u) => u.username === username)

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        jwtSecret
      )
      res.json({ token })
    } else {
      res.status(401).json({ message: 'Invalid username or password' })
    }
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Other routes that require authentication...

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
