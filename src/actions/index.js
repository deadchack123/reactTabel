import userConnector from '../userConnector.js'

export const saveUsers = (users) => ({
    type: 'SAVE_USERS',
    users: users.map(user => {
        const [name, secondName] = user.name.split(' ')
        return {
            name,
            secondName,
            age: user.age
        }
    })
})

export function fetchPost() {
    return function (dispatch) {
        return userConnector.getAllUsers()
            .then(users =>
                dispatch(saveUsers(users))
            )
    }
}