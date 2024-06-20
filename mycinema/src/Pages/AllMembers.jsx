import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Member from "../Components/Member"
import { useEffect } from "react"

import axios from 'axios'


const AllMembers = () => {
    const membersurl = 'http://localhost:3000/members'

    const dispatch = useDispatch()

    const members = useSelector(state => state.members)
    const subscriptions = useSelector(state => state.subscriptions)
    const movies = useSelector(state => state.movies)


    useEffect(() => {
        const fetchData = async () => {
            const { data: members } = await axios.get(membersurl);

            dispatch({ type: 'LOADMEMBERS', payload: members })

        };
        fetchData();

    }, [])

    return (
        <>
            <Container>
                {
                    members?.map(member => {
                        return <Member key={member._id} member={member} subscriptions={subscriptions} allmovies={movies} />
                    })
                }
            </Container>
        </>
    )
}

export default AllMembers
