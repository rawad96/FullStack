const express = require('express')
const SubscriptionsBLL = require('../BLL/subscriptionsBLL')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const subscriptions = await SubscriptionsBLL.getAllSubscriptions();
        res.send(subscriptions);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const subscription = await SubscriptionsBLL.getSubscriptionById(id);
        res.send(subscription);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const obj = req.body;
        const result = await SubscriptionsBLL.addSubscription(obj);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await SubscriptionsBLL.updateSubscription(id, obj);
        return res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await SubscriptionsBLL.deleteSubscription(id);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;