import { Card, Row, Container, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Home.css'
import { useState } from 'react'
import axios from 'axios'



const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const auth = "http://localhost:3000/auth"

    const navigate = useNavigate()

    const Loginn = async () => {
        const loginData = { username: username, password: password }

        const resp = await axios.post(auth, loginData)

        sessionStorage['accessToken'] = resp.data.accessToken
        navigate('/main')
    }


    return (
        <>
            <Container style={{ marginTop: "20%", width: "30%" }}>
                <Card>
                    <Row className='mt-2'>
                        <label htmlFor="username">User name: </label>
                        <input type="text" onChange={e => setusername(e.target.value)} required />
                    </Row>
                    <Row className='mt-2'>
                        <label htmlFor="password">Password: </label>
                        <input type="password" onChange={e => setpassword(e.target.value)} required />
                    </Row>
                    <Row className='mt-2'>
                        <Link to="/createaccount" className='createacc'>Create account</Link>
                    </Row>
                    <Row className='mt-2 mb-2'>
                        <Button style={{ fontSize: "large", width: "50%", margin: "auto" }} onClick={Loginn}>Login</Button>
                    </Row>
                </Card>
            </Container>

        </>
    )
}

export default Login
