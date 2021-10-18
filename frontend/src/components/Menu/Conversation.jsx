import { useState, useEffect, useContext } from 'react'

//components
import { getUsers } from "../../api/api"
import { AccountContext } from '../../context/AccountProvider'
import IndividualConversation from './IndividualConversation'

const Conversation = () => {
    const { account } = useContext(AccountContext)
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers()
            // console.log(data)
            setUsers(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            {
                users.map(user => (
                            
                            <IndividualConversation user={user}/>
                ))
            }
        </div>
    )
}

export default Conversation