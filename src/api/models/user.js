class User {
    constructor(id, username, password) {
        this.id = id
        this.username = username
        this.password = password
    }

    static findByCredentials(username, password) {
        const users = [
            new User(1, 'aadmin', 'password123'),
        ]

        return users.find((user) => user.username === username && user.password === password)
    }
}

module.exports = User