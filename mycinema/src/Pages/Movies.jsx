import { useEffect, useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Movie from "../Components/Movie"
import axios from "axios"


const Movies = () => {

    const permissionsurl = 'http://localhost:3000/permissions'

    const [accessallmovies, setaccessallmovies] = useState(false)
    const [accessaddmovies, setaccessaddmovies] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const { data: permissions } = await axios.get(permissionsurl);
            const per = permissions?.find(p => p._id === sessionStorage['accessuserid'])
            sessionStorage['allmovies'] = "false"
            sessionStorage['updatemovie'] = "false"
            sessionStorage['deletemovie'] = "false"
            per.permissions?.map(pe => {
                if (pe === 'View Movies') {
                    setaccessallmovies(true)
                    sessionStorage['allmovies'] = "true"
                } else if (pe === 'Create Movies') {
                    setaccessaddmovies(true)
                } else if (pe === 'Delete Movies') {
                    sessionStorage['deletemovie'] = "true"
                } else if (pe === 'Update Movie') {
                    sessionStorage['updatemovie'] = "true"
                }
            })
        };
        fetchData();

    }, [accessallmovies])


    const [movie, setmovie] = useState({})
    const [moviename, setmoviename] = useState("")

    const dispatch = useDispatch()

    const gotmovie = useSelector(state => state.presentsearch)
    const allmovies = useSelector(state => state.movies)

    const findmovie = () => {
        const obj = allmovies.find(m => m.name === moviename)
        setmovie(obj)
        dispatch({ type: "PSEARCH", payload: true })
    }

    const presentallmovies = () => {
        setmoviename("")
        dispatch({ type: "PSEARCH", payload: false })
    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Title>Movies</Card.Title>
                    <Card.Body>
                        {accessallmovies && <Link to="allmovies" style={{ marginRight: "2%", textDecoration: "unset" }} onClick={presentallmovies}>All Movies</Link>}
                        {accessaddmovies && <Link to="addmovie" style={{ textDecoration: "unset" }}>Add Movie</Link>}
                        <label style={{ marginLeft: "2%" }} htmlFor="search">Search</label><input type="text" style={{ fontSize: "small" }} onChange={e => setmoviename(e.target.value)} />
                        <Button style={{ marginLeft: "1%", fontSize: "small" }} onClick={findmovie}>Search</Button>
                    </Card.Body>
                    {
                        gotmovie && <Movie movie={movie} />
                    }

                    <Outlet />
                </Card>
            </Container>
        </>
    )
}

export default Movies
