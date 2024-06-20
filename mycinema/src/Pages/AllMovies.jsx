import { useDispatch, useSelector } from "react-redux"
import { Container } from "react-bootstrap"
import Movie from "../Components/Movie"
import axios from 'axios'
import { useEffect } from "react"


const AllMovies = () => {
    const moviesurl = 'http://localhost:3000/movies'
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchData = async () => {
            const { data: allMovies } = await axios.get(moviesurl);

            dispatch({ type: 'LOADMOVIES', payload: allMovies })

        };
        fetchData();

    }, [])
    const allMovies = useSelector(state => state.movies)
    const presentallmovies = useSelector(state => state.presentsearch)

    return (
        <>
            {
                !presentallmovies && <Container>
                    {
                        allMovies?.map(movie => {
                            return <Movie key={movie._id} movie={movie} />
                        })
                    }
                </Container>

            }
        </>
    )
}

export default AllMovies
