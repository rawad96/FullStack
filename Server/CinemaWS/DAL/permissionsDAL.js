const jf = require('jsonfile')

const file = "data/Permissions.json"

const getPermissions = () => {
    return jf.readFile(file)
}

const setPermissions = (data) => {
    return jf.writeFile(file, data)
}

module.exports = { getPermissions, setPermissions }