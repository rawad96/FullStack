import { useEffect, useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const AddUser = () => {

    const userurl = 'http://localhost:3000/user'
    const usersurl = 'http://localhost:3000/users'
    const permissionsurl = 'http://localhost:3000/permissions'

    const [date, setdate] = useState("")
    const [FirsName, setFirsName] = useState("")
    const [LastName, setLastName] = useState("")
    const [UserName, setUserName] = useState("")
    const [STO, setSTO] = useState("")
    const [Permissions, setPermissions] = useState([])

    const adduser = () => {
        const obj = { FirstName: FirsName, LastName: LastName, CreatedDate: date, SessionTimeOut: STO }
        const obj2 = { permissions: Permissions }
    }

    const setpermissions = (e) => {
        if (e.target.checked) {
            Permissions.push(e.target.value)
        }
        if (!e.target.checked) {
            setPermissions(Permissions.filter(per => per !== e.target.value))
        }

    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Title>Edit Movie</Card.Title>
                    <Card.Body>
                        <Row>
                            <label htmlFor="firstname">First Name: </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onChange={e => setFirsName(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="lastname">Last Name: </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onChange={e => setLastName(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="username">User Name: </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onChange={e => setUserName(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="sto">Session time out (Minutes): </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onChange={e => setSTO(e.target.value)} />
                        </Row>
                        <Row className="mt-2">
                            <label htmlFor="sto">Date: </label>
                            <input type="text" style={{ width: "50%", margin: "auto" }} onChange={e => setdate(e.target.value)} />
                        </Row>
                        <Card className="mt-2" style={{ width: "51.5%", margin: "auto" }}>
                            <h6>Permissions</h6>
                            <Card.Body style={{ textAlign: "left" }}>
                                <input type="checkbox" name="ViewSub" id="ViewSub" value="View Subscriptions" onChange={setpermissions} />
                                <label htmlFor="ViewSub">View Subscriptions</label> <br />

                                <input type="checkbox" name="CreateSub" id="CreateSub" value="Create Subscriptions" onChange={setpermissions} />
                                <label htmlFor="CreateSub">Create Subscriptions</label> <br />

                                <input type="checkbox" name="DelSub" id="DelSub" value="Delete Subscriptions" onChange={setpermissions} />
                                <label htmlFor="DelSub">Delete Subscriptions</label> <br />

                                <input type="checkbox" name="UpdateSub" id="UpdateSub" value="Update Subscriptions" onChange={setpermissions} />
                                <label htmlFor="UpdateSub">Update Subscriptions</label> <br />

                                <input type="checkbox" name="ViewMovies" id="ViewMovies" value="View Movies" onChange={setpermissions} />
                                <label htmlFor="ViewMovies">View Movies</label> <br />

                                <input type="checkbox" name="CreateMovies" id="CreateMovies" value="Create Movies" onChange={setpermissions} />
                                <label htmlFor="CreateMovies">Create Movies</label> <br />

                                <input type="checkbox" name="DeleteMovies" id="DeleteMovies" value="Delete Movies" onChange={setpermissions} />
                                <label htmlFor="DeleteMovies">Delete Movies</label> <br />

                                <input type="checkbox" name="UpdateMovies" id="UpdateMovies" value="Update Movies" onChange={setpermissions} />
                                <label htmlFor="UpdateMovies">Update Movies</label>
                            </Card.Body>
                        </Card>




                        <Row className="mt-2">
                            <Button type="submit" style={{ width: "20%", marginLeft: "29%" }} onClick={adduser}>Save</Button>
                            <Button type="button" style={{ width: "20%", marginLeft: "2%" }} >Cansel</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default AddUser
