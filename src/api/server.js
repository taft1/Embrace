const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())

const users = [{ id: 1, username: 'aadmin', password: 'password123' }]

function generateToken(userId) {
  return `fake_token_${userId}`
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' })
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  )

  if (user) {
    const token = generateToken(user.id)
    return res.json({ token })
  } else {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
