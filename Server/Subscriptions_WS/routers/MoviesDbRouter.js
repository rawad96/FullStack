const express = require('express')
const MoviesDbBLL = require('../BLL/MoviesDbBLL')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const movies = await MoviesDbBLL.getAllMovies();
        res.send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await MoviesDbBLL.getMovieById(id);
        res.send(movie);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const obj = req.body;
        const result = await MoviesDbBLL.addMovie(obj);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await MoviesDbBLL.updateMovie(id, obj);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await MoviesDbBLL.deleteMovie(id);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;