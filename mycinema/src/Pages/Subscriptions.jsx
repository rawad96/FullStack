import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"


const Subscriptions = () => {

    const permissionsurl = 'http://localhost:3000/permissions'

    const [accessallmembers, setaccessallmembers] = useState(false)
    const [accessaddmember, setaccessaddmember] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const { data: permissions } = await axios.get(permissionsurl);
            const per = permissions?.find(p => p._id === sessionStorage['accessuserid'])
            sessionStorage['allmembers'] = "false"
            sessionStorage['updatemember'] = "false"
            sessionStorage['deletemember'] = "false"
            per.permissions?.map(pe => {
                if (pe === 'View Subscriptions') {
                    setaccessallmembers(true)
                    sessionStorage['allmembers'] = "true"
                } else if (pe === 'Create Subscriptions') {
                    setaccessaddmember(true)
                } else if (pe === 'Delete Subscriptions') {
                    sessionStorage['deletemember'] = "true"
                } else if (pe === 'Update Subscriptions') {
                    sessionStorage['updatemember'] = "true"
                }
            })
        };
        fetchData();

    }, [accessallmembers, accessaddmember])


    return (
        <>
            <Container>
                <Card>
                    <Card.Title>Subscriptions</Card.Title>
                    <Card.Body>
                        {accessallmembers && <Link to='allmembers' style={{ marginRight: "2%", textDecoration: "unset" }}>All Members</Link>}
                        {accessaddmember && <Link to='addmember' style={{ textDecoration: "unset" }}>Add Member</Link>}
                    </Card.Body>
                    <Outlet />
                </Card>
            </Container>
        </>
    )
}

export default Subscriptions
