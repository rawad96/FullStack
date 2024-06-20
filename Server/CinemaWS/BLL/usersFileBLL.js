const usersFile = require('../DAL/usersDAL')


const getAllUsers = async () => {
    const { users } = await usersFile.getUsers()
    return users
}

const getUserById = async (id) => {
    const { users } = await usersFile.getUsers()
    const user = users.find(user => user._id === id)
    return {
        _id: user._id,
        FirstName: user.FirstName,
        LastName: user.LastName,
        CreatedDate: user.CreatedDate,
        SessionTimeOut: user.SessionTimeOut
    }
}

const AddUser = async (obj) => {
    const data = await usersFile.getUsers()
    data.users.push(obj)
    await usersFile.setUsers(data)
    return 'created'
}

const UpdatUser = async (id, obj) => {
    const data = await usersFile.getUsers()
    const index = data.users.findIndex(u => u._id === id)

    if (index !== -1) {
        data.users[index].FirstName = obj.FirstName
        data.users[index].LastName = obj.LastName
        data.users[index].CreatedDate = obj.CreatedDate
        data.users[index].SessionTimeOut = obj.SessionTimeOut
    }
    await usersFile.setUsers(data)
    return 'updated'
}

const DeleteUser = async (id) => {
    const data = await usersFile.getUsers()
    data.users = data.users.filter(user => user._id !== id)
    await usersFile.setUsers(data)
    return 'deleted'
}



module.exports = { getAllUsers, getUserById, AddUser, DeleteUser, UpdatUser }