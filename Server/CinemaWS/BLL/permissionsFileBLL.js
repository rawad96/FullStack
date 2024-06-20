const permissionsFile = require('../DAL/permissionsDAL')

const getAllPermissions = async () => {
    const { Permissions } = await permissionsFile.getPermissions()
    return Permissions
}

const getUserPermissions = async (id) => {
    const { Permissions } = await permissionsFile.getPermissions()
    const userper = Permissions.find(per => per._id === id)
    return {
        _id: userper.id,
        permissions: userper.permissions
    }
}

const AddPermission = async (obj) => {
    const data = await permissionsFile.getPermissions()
    data.Permissions.push(obj)
    await permissionsFile.setPermissions(data)
    return 'created'
}

const UpdatPermissions = async (id, obj) => {
    const { Permissions } = await permissionsFile.getPermissions()

    const index = Permissions.findIndex(p => p._id === id)

    if (index !== -1) {
        Permissions[index].permissions = obj.permissions
    }
    await permissionsFile.setPermissions({ Permissions: Permissions })
    return 'updated'
}

const DeletePermissions = async (id) => {
    const data = await permissionsFile.getPermissions()

    data.Permissions = data.Permissions.filter(per => per._id !== id)
    await permissionsFile.setPermissions(data)
    return 'deleted'
}

module.exports = { getUserPermissions, getAllPermissions, AddPermission, UpdatPermissions, DeletePermissions }