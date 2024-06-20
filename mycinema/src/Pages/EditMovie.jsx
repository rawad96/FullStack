import { useEffect, useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"


const EditMovie = () => {
    const moviesurl = 'http://localhost:3000/movies'

    const navigate = useNavigate()

    const [name, setname] = useState("")
    const [genres, setgenres] = useState("")
    const [imageurl, setimageurl] = useState("")
    const [prem, setprem] = useState("")

    const updatemovie = async () => {
        const genres1 = genres.split(',')
        const obj = { name: name, genres: genres1, image: imageurl, premiered: prem }
        try {
            const senddata = await axios.put(`${moviesurl}/${sessionStorage['id']}`, obj)
            navigate('/main/movies/allmovies')

        } catch (err) {
            console.log(err.message)
        }

    }

    const cancel = () => {
        setname("")
        setgenres("")
        setimageurl("")
        setprem("")
        navigate('/main/movies/allmovies')
    }


    return (
        <>
            <Container>
                <Card>
                    <Card.Title>Edit Movie</Card.Title>
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
                            <Button type="submit" style={{ width: "20%", marginLeft: "29%" }} onClick={updatemovie}>Save</Button>
                            <Button type="button" style={{ width: "20%", marginLeft: "2%" }} onClick={cancel}>Cansel</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default EditMovie
