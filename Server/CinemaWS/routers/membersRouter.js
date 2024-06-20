const express = require('express')
const axios = require('axios')

const router = express.Router()

const membersurl = 'http://localhost:8000/members'

router.get('/', async (req, res) => {
    try {
        const { data: users } = await axios.get(membersurl);
        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data: user } = await axios.get(`${membersurl}/${id}`);
        return res.json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const obj = req.body
        const { result } = await axios.post(membersurl, obj);
        return res.status(201).send(result);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await axios.put(`${membersurl}/${id}`, obj);
        return res.json(result.data);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await axios.delete(`${membersurl}/${id}`, "");
        return res.send(result.data);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;