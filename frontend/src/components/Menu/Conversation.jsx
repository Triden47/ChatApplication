import { useState, useEffect, useContext } from 'react'

//components
import { getUsers } from "../../api/api"
import { AccountContext } from '../../context/AccountProvider'
import IndividualConversation from './IndividualConversation'

const Conversation = ({ search }) => {
    const { account, socket, setActiveUsers } = useContext(AccountContext)
    const [ users, setUsers ] = useState([])

    const [ bgChange, setBgChange ] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers()
            // console.log(data)
            const filterData = data.filter(user => user.givenName.toLowerCase().includes(search.toLowerCase()))
            setUsers(filterData)
        }
        fetchData()
    }, [search])

    useEffect(() => {
        socket.current.emit('addUser', account.googleId)
        socket.current.on('getUsers', users => {
             setActiveUsers(users)
        })
    })
    return (
        <div>
            {
                users.map(user => (
                    <IndividualConversation 
                    user={user} 
                    key={user.googleId} 
                    setBgChange={(id) => setBgChange(id)}
                    bg={bgChange===user.googleId ? "#5b89a3da" : ""}
                    />
                ))
            }
        </div>
    )
}

export default Conversation