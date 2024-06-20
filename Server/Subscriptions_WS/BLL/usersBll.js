const usersWS = require('../DAL/usersWS')
const UsersDbBLL = require('../BLL/UsersDbBLL')

const getAllUsers = async () => {
    let { data: users } = await usersWS.getAllUsers()

    users = users.map(user => {
        return { name: user.name, email: user.email, city: user.address.city }
    })

    users.map(user => {
        UsersDbBLL.addUser(user)
    })

    return
}

module.exports = getAllUsers