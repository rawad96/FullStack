import { useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from "react-router-dom"





const EditMember = () => {

    const membersurl = 'http://localhost:3000/members'

    const navigate = useNavigate()

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [city, setcity] = useState("")


    const updateMember = async () => {
        const obj = { name: name, email: email, city: city }
        try {
            const senddata = await axios.put(`${membersurl}/${sessionStorage['id']}`, obj)
            navigate('/main/subscriptions/allmembers')
        } catch (err) {
            console.log(err.message)
        }

    }

    const cancel = () => {
        setname("")
        setemail("")
        setcity("")
        navigate('/main/subscriptions/allmembers')
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
                            <label htmlFor="email">Email: </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onInput={e => setemail(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="city">City </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onInput={e => setcity(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <Button type="submit" style={{ width: "20%", marginLeft: "29%" }} onClick={updateMember}>Save</Button>
                            <Button type="button" style={{ width: "20%", marginLeft: "2%" }} onClick={cancel}>Cansel</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default EditMember
