const express = require('express')
const axios = require('axios')

const subscriptionurl = 'http://localhost:8000/subscriptions'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { data: subscriptions } = await axios.get(subscriptionurl);
        return res.json(subscriptions);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data: subscription } = await axios.get(`${subscriptionurl}/${id}`);
        return res.json(subscription);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const obj = req.body;
        const { result } = await axios.post(subscriptionurl, obj);
        return res.status(201).send(result);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await axios.put(`${subscriptionurl}/${id}`, obj);
        return res.send(result.data);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await axios.delete(`${subscriptionurl}/${id}`, "");
        return res.send(result.data);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;