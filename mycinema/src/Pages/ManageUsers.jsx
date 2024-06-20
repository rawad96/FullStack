
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

const ManageUsers = () => {
    const permissionsurl = 'http://localhost:3000/permissions'

    const [admin, setadmin] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const { data: permissions } = await axios.get(permissionsurl);
            const per = permissions?.find(p => p._id === sessionStorage['accessuserid'])
            per.permissions?.map(pe => {
                if (pe === 'ADMIN') {
                    setadmin(true)
                }
            })
        };
        fetchData();

    }, [admin])



    return (
        <>
            <Container style={{ display: admin ? "block" : "none" }}>
                <Card>
                    <Card.Title>Users</Card.Title>
                    <Card.Body>
                        <Link to="allusers" style={{ marginRight: "2%", textDecoration: "unset" }}>All Users</Link>
                        <Link to="" style={{ textDecoration: "unset" }}>Add User</Link>
                    </Card.Body>
                    <Outlet />
                </Card>

            </Container>
        </>
    )
}

export default ManageUsers
