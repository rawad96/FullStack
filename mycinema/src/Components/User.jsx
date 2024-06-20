import { useEffect, useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const User = ({ user, allpermissions, deleted }) => {

    const [userper, setuserper] = useState({})
    const [userr, setuserr] = useState({})

    const userurl = 'http://localhost:3000/user'
    const usersurl = 'http://localhost:3000/users'
    const permissionsurl = 'http://localhost:3000/permissions'

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(userurl);
            setuserr(data.find(u => u._id === user._id))
        };
        fetchData();
        setuserper(allpermissions.find(per => per._id === user._id))
    }, [])

    const edituser = () => {
        sessionStorage['id'] = userr._id
        sessionStorage['date'] = user.CreatedDate
        navigate('/main/manageusers/edituser')
    }

    const deleteuser = async () => {
        const d = await axios.delete(`${userurl}/${user._id}`, "")
        const d1 = await axios.delete(`${usersurl}/${user._id}`, "")
        const d2 = await axios.delete(`${permissionsurl}/${user._id}`, "")

        const { data: users } = await axios.get(usersurl);
        const { data: permissions } = await axios.get(permissionsurl);

        dispatch({ type: 'LOADUSERS', payload: users })
        dispatch({ type: 'LOADPERMISSIONS', payload: permissions })

    }

    return (
        <>

            <Card className="mt-3">
                <Card.Body>
                    <Card.Text> <strong>Name:</strong>{user?.FirstName}{' '}{user?.LastName} </Card.Text>
                    <Card.Text> <strong>User Name:</strong> {userr?.username} </Card.Text>
                    <Card.Text> <strong>Session time out (Minutes):</strong> {user?.SessionTimeOut} </Card.Text>
                    <Card.Text> <strong>Created date:</strong> {user?.CreatedDate} </Card.Text>
                    <Card.Text> <strong>Permissions:</strong>
                        {
                            userper?.permissions?.map((p, index) => {
                                return <span style={{ marginLeft: "1%" }} key={index}>{p}</span>
                            })
                        }
                    </Card.Text>

                    <Button className="mb-2" style={{ marginRight: "1%" }} onClick={edituser}>Edit</Button>
                    <Button className="mb-2" style={{ marginLeft: "1%" }} onClick={deleteuser}>Delete</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default User
