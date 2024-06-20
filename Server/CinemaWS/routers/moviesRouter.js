const express = require('express')
const axios = require('axios')

const moviesurl = 'http://localhost:8000/movies'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { data: movies } = await axios.get(moviesurl);
        return res.json(movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data: movie } = await axios.get(`${moviesurl}/${id}`);
        return res.json(movie);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const obj = req.body;
        const { result } = await axios.post(moviesurl, obj);
        return res.status(201).send(result);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await axios.put(`${moviesurl}/${id}`, obj);
        return res.send(result.data);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await axios.delete(`${moviesurl}/${id}`, "");
        return res.send(result.data);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;