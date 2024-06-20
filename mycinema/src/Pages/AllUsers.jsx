import { Button, Card, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import User from "../Components/user"
import { useEffect, useState } from "react"
import axios from "axios"


const AllUsers = () => {

    const users = useSelector(state => state.users)
    const allpermissions = useSelector(state => state.allpermissions)

    const usersurl = 'http://localhost:3000/users'
    const permissionsurl = 'http://localhost:3000/permissions'

    const [deleteuser, setdeleteuser] = useState(false)


    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const { data: users } = await axios.get(usersurl);
            const { data: permissions } = await axios.get(permissionsurl);

            dispatch({ type: 'LOADUSERS', payload: users })
            dispatch({ type: 'LOADPERMISSIONS', payload: permissions })
        };
        fetchData();

    }, [])


    const deleted = (e) => {
        setdeleteuser(true)
    }

    return (
        <>
            <Container>
                {
                    users?.map(user => {
                        return <User user={user} allpermissions={allpermissions} key={user._id} deleted={deleted} />
                    })
                }
            </Container>
        </>
    )
}

export default AllUsers
