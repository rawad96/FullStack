import { useState } from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const CreateAccount = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const userurl = 'http://localhost:3000/user'
    const usersurl = 'http://localhost:3000/users'
    const permissionsurl = 'http://localhost:3000/permissions'

    const navigate = useNavigate()


    const createuser = async () => {
        try {
            const newUser = { username: username, password: password }
            const sendData = await axios.post(userurl, newUser)
            const { data } = await axios.get(userurl)
            const user = data.find(u => u.username === username)
            const newuserdata = { _id: user._id, FirstName: "", LastName: "", CreatedDate: new Date().toDateString(), SessionTimeOut: "" }
            const sendnew = await axios.post(usersurl, newuserdata)
            const sendnewper = await axios.post(permissionsurl, { _id: user._id, permissions: [] })
            navigate('/')

        } catch (err) {
            console.log(err.message)
        }

    }


    return (
        <>
            <Container style={{ marginTop: "20%", width: "30%" }}>
                <Card>
                    <Form>
                        <Row className="mt-2">
                            <label htmlFor="username">User name:</label>
                            <input type="text" onChange={e => setusername(e.target.value)} required />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="password">Password:</label>
                            <input type="password" onChange={e => setpassword(e.target.value)} required />
                        </Row>
                        <Row className="mt-2 mb-2">
                            <Button style={{ width: "50%", fontSize: "large", margin: "auto" }} onClick={createuser}>Create</Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default CreateAccount
