const moviesWS = require('../DAL/moviesWS')
const MoviesDbBLL = require('../BLL/MoviesDbBLL')


const getAllMovies = async () => {
    let { data: movies } = await moviesWS.getAllMovies()

    movies = movies.map(movie => {
        return { name: movie.name, genres: movie.genres, image: movie.image.medium, premiered: movie.premiered }
    })

    movies.map(movie => {
        MoviesDbBLL.addMovie(movie)
    })

    return
}

module.exports = getAllMovies