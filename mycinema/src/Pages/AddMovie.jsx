import { useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const AddMovie = () => {

    const moviesurl = 'http://localhost:3000/movies'

    const navigate = useNavigate()

    const [name, setname] = useState("")
    const [genres, setgenres] = useState("")
    const [imageurl, setimageurl] = useState("")
    const [prem, setprem] = useState("")

    const addmovie = async () => {
        const genres1 = genres.split(',')
        const obj = { name: name, genres: genres1, image: imageurl, premiered: prem }
        const senddata = await axios.post(moviesurl, obj)
        if (sessionStorage['allmovies'] === 'true') {
            navigate('/main/movies/allmovies')
        }


    }

    const cancel = () => {
        setname("")
        setgenres("")
        setimageurl("")
        setprem("")
        if (sessionStorage['allmovies'] === 'true') {
            navigate('/main/movies/allmovies')
        }
    }


    return (
        <>
            <Container>
                <Card>
                    <Card.Title>Add Movie</Card.Title>
                    <Card.Body>
                        <Row>
                            <label htmlFor="name">Name: </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onInput={e => setname(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="genres">Genres: </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onInput={e => setgenres(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="url">Image URL: </label>
                            <input type="url" style={{ width: "50%", margin: "auto" }} onInput={e => setimageurl(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="premired">Premired: </label>
                            <input type="date" style={{ width: "50%", margin: "auto" }} onInput={e => setprem(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <Button type="submit" style={{ width: "20%", marginLeft: "29%" }} onClick={addmovie}>Save</Button>
                            <Button type="button" style={{ width: "20%", marginLeft: "2%" }} onClick={cancel}>Cansel</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </>
    )
}

export default AddMovie
