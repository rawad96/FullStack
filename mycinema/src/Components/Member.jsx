import { useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import SubscribeNewMovie from "./SubscribeNewMovie"
import UserSubscriptions from "./UserSubscriptions"
import { useDispatch } from "react-redux"

const Member = ({ member, subscriptions, allmovies }) => {

    const [subscribenew, setsubscribenew] = useState(false)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const membersurl = 'http://localhost:3000/members'
    const subscriptionsurl = 'http://localhost:3000/subscriptions'

    const editmember = () => {
        sessionStorage['id'] = member._id
        navigate('/main/subscriptions/editmember')

    }

    const deletemember = async () => {
        const d = await axios.delete(`${membersurl}/${member._id}`, "")
        const { data: members } = await axios.get(membersurl);
        const { data: subscriptions } = await axios.get(subscriptionsurl);

        dispatch({ type: 'LOADMEMBERS', payload: members })
        dispatch({ type: 'LOADSUBSCRIPTIONS', payload: subscriptions })
    }

    const display = (e) => {
        setsubscribenew(e)
    }

    return (
        <>
            <Container>
                <Card className="mt-3">
                    <Card.Title style={{ fontSize: "larger" }}>{member.name}</Card.Title>
                    <Card.Body>
                        <Card.Text> <strong>Email:</strong> {member.email}</Card.Text>
                        <Card.Text> <strong>City:</strong>  {member.city}</Card.Text>
                        {(sessionStorage['updatemember'] === 'true') && <Button className="mb-2" style={{ marginRight: "1%" }} onClick={editmember}>Edit</Button>}
                        {(sessionStorage['deletemember'] === 'true') && <Button className="mb-2" style={{ marginLeft: "1%" }} onClick={deletemember}>Delete</Button>}
                        <Card>
                            <Card.Title>Movies Watched</Card.Title>
                            <Button className="mb-2" style={{ width: "30%", margin: "auto" }} onClick={() => setsubscribenew(!subscribenew)}>Subscribe to new movie</Button>
                            <Container style={{ display: subscribenew ? "block" : "none" }}><SubscribeNewMovie memberid={member._id} allmovies={allmovies} subscriptions={subscriptions} display={display} /></Container>
                            {
                                subscriptions?.map(sub => {
                                    return (sub.userId === member._id) && <UserSubscriptions key={sub._id} subscription={sub} allmovies={allmovies} />
                                })
                            }
                        </Card>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Member
