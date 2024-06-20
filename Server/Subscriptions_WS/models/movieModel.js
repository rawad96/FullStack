const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
    {
        name: String,
        genres: [String],
        image: String,
        premiered: String
    },
    { versionKey: false }
)

const Movie = mongoose.model('movie', movieSchema, 'movies')

module.exports = Movie