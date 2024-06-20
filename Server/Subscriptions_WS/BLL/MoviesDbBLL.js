const Movie = require('../models/movieModel')

// Get All
const getAllMovies = () => {
    return Movie.find();
};

// Get By ID
const getMovieById = (id) => {
    return Movie.findById(id);
};

// Post
const addMovie = async (obj) => {
    const movie = new Movie(obj);
    await movie.save();
    return 'Created!';
};

// Put
const updateMovie = async (id, obj) => {
    await Movie.findByIdAndUpdate(id, obj);
    return 'Updated!';
};

// Delete
const deleteMovie = async (id) => {
    await Movie.findByIdAndDelete(id);
    return 'Deleted!';
};

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
};