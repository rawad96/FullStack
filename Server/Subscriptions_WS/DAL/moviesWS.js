const axios = require('axios')

const url = "http://api.tvmaze.com/shows"

const getAllMovies = () => {
    return axios.get(url)
}

module.exports = { getAllMovies }