import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import axios from 'axios'
import { useDispatch } from "react-redux"



const SubscribeNewMovie = ({ memberid, allmovies, display }) => {

    const subscriptionsurl = 'http://localhost:3000/subscriptions'
    const dispatch = useDispatch()


    const [selectedID, setselectedID] = useState("")
    const [date, setdate] = useState("")

    const setdata = (e) => {
        setselectedID(e.target.value)
    }

    const subscribe = async () => {
        const movie = allmovies.find(m => m._id === selectedID)
        const obj = { userId: memberid, movies: [{ movieId: movie._id, date: date }] }

        const send = await axios.post(`${subscriptionsurl}`, obj)

        const { data: subscriptions } = await axios.get(subscriptionsurl);
        dispatch({ type: 'LOADSUBSCRIPTIONS', payload: subscriptions })

        display(false)
    }



    return (
        <>
            <Card>
                <Card.Title>Add a new movie</Card.Title>
                <Card.Body>
                    <select onChange={setdata}>
                        {
                            allmovies?.map(movie => {
                                return <option key={movie._id} value={movie._id}>{movie.name}</option>
                            })
                        }
                    </select>
                    <input type="date" style={{ marginLeft: "2%" }} onChange={e => setdate(e.target.value)} />
                    <br />
                    <Button className="mt-2" style={{ width: "20%" }} onClick={subscribe}>Subscribe</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default SubscribeNewMovie
