import { useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"




const AddMember = () => {

    const membersurl = 'http://localhost:3000/members'

    const navigate = useNavigate()

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [city, setcity] = useState("")


    const addmember = async () => {
        const obj = { name: name, email: email, city: city }

        const senddata = await axios.post(membersurl, obj)
        if (sessionStorage['allmembers'] === "true") {
            navigate('/main/subscriptions/allmembers')
        }

    }

    const cancel = () => {
        setname("")
        setemail("")
        setcity("")
        if (sessionStorage['allmembers'] === "true") {
            navigate('/main/subscriptions/allmembers')
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
                            <label htmlFor="email">Email: </label>
                            <input type="email" style={{ width: "50%", margin: "auto" }} onInput={e => setemail(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="city">City: </label>
                            <input type="texe" style={{ width: "50%", margin: "auto" }} onInput={e => setcity(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <Button type="submit" style={{ width: "20%", marginLeft: "29%" }} onClick={addmember}>Save</Button>
                            <Button type="button" style={{ width: "20%", marginLeft: "2%" }} onClick={cancel}>Cansel</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default AddMember
