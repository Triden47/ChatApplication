import { useState, useEffect, useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { UserContext } from '../../context/UserProvider'
import { getConversation, setConversation } from '../../api/api.js'

const IndividualConversation = (props) => {
    // console.log(props.user)

    const { account, newMessageFlag } = useContext(AccountContext)
    const { setPerson } = useContext(UserContext)
    const [ message, setMessage ] = useState({})
    

    const setUser = async () => {
        props.setBgChange(props.user.googleId)
        setPerson(props.user)
        await setConversation({ senderId: account.googleId, receiverId: props.user.googleId })
    }

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ sender: account.googleId, receiver: props.user.googleId })

            setMessage({ text: data.message, timestamp: data.updatedAt })
        }
        getConversationMessage()
    }, [newMessageFlag])

    const formatDate = (date) => {
        return date < 10 ? '0' + date : date
    }
    return (
        <div className="conversation" onClick={() => setUser()} style={{backgroundColor: props.bg}}>
            <img src={props.user.imageUrl} alt="NO dp"/>
            <h5>{props.user.givenName}</h5>
            <h6>{message.text}</h6>
            <p>{formatDate(new Date(message.timestamp).getHours())}:{formatDate(new Date(message.timestamp).getMinutes())}</p>
            
        </div>
    )
}

export default IndividualConversation