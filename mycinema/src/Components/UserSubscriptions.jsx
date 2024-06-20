import { useEffect, useState } from "react"


const UserSubscriptions = ({ subscription, allmovies }) => {

    const [movies, setmovies] = useState([])


    useEffect(() => {
        subscription.movies?.map(movie => {
            allmovies?.map(m => {
                if (m._id === movie.movieId) {
                    movies.push({ name: m.name, date: movie.date })
                }
            })
        })
    }, [])

    return (
        <>
            <ul>
                {
                    movies?.map((movie, index) => {
                        return <li key={index}>{movie.name}&nbsp; {movie.date}</li>
                    })

                }
            </ul>
        </>
    )
}

export default UserSubscriptions
