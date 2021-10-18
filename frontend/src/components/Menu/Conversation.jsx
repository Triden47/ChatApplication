import { useState, useEffect } from 'react'
import { getUsers } from "../../api/api"
const Conversation = () => {

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers()
            // console.log(users)
            setUsers(data)
        }
        fetchData()
    }, [])

    return (
        <div>
        </div>
    )
}

export default Conversation