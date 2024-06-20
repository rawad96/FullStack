const jf = require('jsonfile')

const file = "data/Users.json"

const getUsers = () => {
    return jf.readFile(file)
}

const setUsers = (data) => {
    return jf.writeFile(file, data)
}

module.exports = { getUsers, setUsers }