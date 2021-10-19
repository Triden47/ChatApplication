import { useState, useEffect } from 'react'

//components
import { getUsers } from "../../api/api"
// import { AccountContext } from '../../context/AccountProvider'
import IndividualConversation from './IndividualConversation'

const Conversation = ({ search }) => {
    // const { account } = useContext(AccountContext)
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers()
            // console.log(data)
            const filterData = data.filter(user => user.givenName.toLowerCase().includes(search.toLowerCase()))
            setUsers(filterData)
        }
        fetchData()
    }, [search])

    return (
        <div>
            {
                users.map(user => (
                    <IndividualConversation user={user} key={user.googleId}/>
                ))
            }
        </div>
    )
}

export default Conversation