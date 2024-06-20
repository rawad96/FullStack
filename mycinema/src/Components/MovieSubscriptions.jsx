


const MovieSubscriptions = ({ userId, members, date }) => {


    return (
        <>
            {
                members.map(member => {
                    return (userId === member._id) && <li key={member._id}>{member.name}&nbsp;{date}</li>
                })
            }

        </>
    )
}

export default MovieSubscriptions
