import { Button, Card, } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import axios from 'axios'
import MovieSubscriptions from "./MovieSubscriptions"


const Movie = ({ movie }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()



    const moviesurl = 'http://localhost:3000/movies'

    const subscriptions = useSelector(state => state.subscriptions)
    const members = useSelector(state => state.members)

    const edit = () => {
        sessionStorage['id'] = movie._id
        navigate('/main/movies/editmovie')
    }

    const deletemovie = async () => {
        const d = await axios.delete(`${moviesurl}/${movie._id}`, "")
        const { data: movies } = await axios.get(moviesurl);
        dispatch({ type: 'LOADMOVIES', payload: movies })
    }


    return (
        <>
            <Card className="mt-2">
                <Card.Title>{movie.name} {' '} {movie.premiered}</Card.Title>
                <Card.Body>
                    <strong>genres:</strong>
                    {
                        movie.genres.map((g, index) => {
                            return <Card.Text style={{ display: "inline", marginLeft: "2%" }} key={index}>{g}</Card.Text>
                        })
                    }
                    <br /><br />
                    <Card.Img style={{ width: "140px", float: "left" }} src={movie.image} />
                    <Card>
                        <Card.Title>Subscriptions watched</Card.Title>
                        <Card.Body>
                            <ul>
                                {
                                    subscriptions?.map((s) => {
                                        return s.movies?.map((m) => {
                                            return (m.movieId === movie._id) && <MovieSubscriptions key={m._id} userId={s.userId} members={members} date={m.date} />
                                        })

                                    })
                                }
                            </ul>
                        </Card.Body>
                    </Card>
                    <br /><br />
                    {(sessionStorage['updatemovie'] === 'true') && <Button className="mt-3" style={{ float: "left", clear: "left" }} onClick={edit}>Edit</Button>}
                    {(sessionStorage['deletemovie'] === 'true') && <Button className="mt-3" style={{ float: "left", marginLeft: "2%" }} onClick={deletemovie}>Delete</Button>}
                </Card.Body>
            </Card>
            <Outlet />
        </>
    )
}

export default Movie
