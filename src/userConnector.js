class UserConnector {
    constructor() {
        this.url = process.env.URL || 'http://localhost:3000'
    }

    getAllUsers () {
        return fetch(`${this.url}/users`).then(users => users.json())
    }
}

export default new UserConnector()