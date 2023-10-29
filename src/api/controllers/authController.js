const User = require('../models/user')
const generateToken = require('../utils/generateToken')

exports.login = (req, res) => {
    const { username, password} = req.body

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required'})
    }

    const user = User.findByCredentials(username, password)

    if(user) {
        const token = generateToken(user.id)
        return res.json({ token })
    } else {
        return res.status(401).json({ error: 'Invalid credentials'})
    }
}