const express = require('express')
const permissionsBLL = require('../BLL/permissionsFileBLL')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const permissions = await permissionsBLL.getAllPermissions()
        return res.json(permissions)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const userPermissions = await permissionsBLL.getUserPermissions(id)
        return res.json(userPermissions)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const obj = req.body
        const result = await permissionsBLL.AddPermission(obj)
        return res.status(201).send(result.data)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await permissionsBLL.UpdatPermissions(id, obj);
        return res.status(201).send(result.data)
    } catch (error) {
        return res.status(500).send(error)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await permissionsBLL.DeletePermissions(id);
        return res.send(result);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = router