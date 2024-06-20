const express = require('express')
const usersBLL = require('../BLL/usersFileBLL')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await usersBLL.getAllUsers()
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await usersBLL.getUserById(id)
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const obj = req.body
        const result = await usersBLL.AddUser(obj)
        return res.status(201).send(result.data)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await usersBLL.UpdatUser(id, obj);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await usersBLL.DeleteUser(id);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router