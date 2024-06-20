import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { useDispatch } from 'react-redux'
import axios from "axios"


const Main = () => {




    const membersurl = 'http://localhost:3000/members'
    const moviesurl = 'http://localhost:3000/movies'
    const subscriptionsurl = 'http://localhost:3000/subscriptions'
    const usersurl = 'http://localhost:3000/users'
    const permissionsurl = 'http://localhost:3000/permissions'
    const accessurl = 'http://localhost:3000/access'

    const [response, setresponse] = useState("")


    const dispatch = useDispatch()

    useEffect(() => {

        const access = async () => {
            const accessToken = sessionStorage['accessToken']
            const resp = await axios.get(accessurl, { headers: { xaccesstoken: accessToken } })
            setresponse(resp.data.id)


        }
        access()
        const fetchData = async () => {
            const { data: members } = await axios.get(membersurl);
            const { data: movies } = await axios.get(moviesurl);
            const { data: subscriptions } = await axios.get(subscriptionsurl);
            const { data: users } = await axios.get(usersurl);
            const { data: permissions } = await axios.get(permissionsurl);


            dispatch({ type: 'LOADMEMBERS', payload: members })
            dispatch({ type: 'LOADMOVIES', payload: movies })
            dispatch({ type: 'LOADSUBSCRIPTIONS', payload: subscriptions })
            dispatch({ type: 'LOADUSERS', payload: users })
            dispatch({ type: 'LOADPERMISSIONS', payload: permissions })
        };
        fetchData();
    }, [])


    const loguot = () => {
        sessionStorage['accessToken'] = ""
    }


    return (
        <>
            <Card style={{ display: response ? "block" : "none" }}>
                <Card.Title>Movies-Subscriptions Web Site</Card.Title>
                <Card.Body>
                    <Link to="movies" style={{ marginRight: "2%", textDecoration: "unset" }}>Movies</Link>
                    <Link to="subscriptions" style={{ marginRight: "2%", textDecoration: "unset" }}>Subscriptions</Link>
                    <Link to="manageusers" style={{ marginRight: "2%", textDecoration: "unset" }}>Users Management</Link>
                    <Link to="/" style={{ textDecoration: "unset" }} onClick={loguot}>Log Out</Link>
                </Card.Body>
                <Outlet />
            </Card>
        </>
    )
}

export default Main
