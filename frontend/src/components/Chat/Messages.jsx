import { useState, useEffect, useContext } from 'react'

//components
import ChatBg from '../../images/ChatBg.jpg'
import { UserContext } from '../../context/UserProvider'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation, getMessage } from '../../api/api'
import  Message from './Message'

const Messages = (props) => {

    const { account } = useContext(AccountContext)
    const { person } = useContext(UserContext)

    const [ conversation, setConversation ] = useState({})

    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ sender: account.googleId, receiver: person.googleId })
            setConversation(data)
            props.setConversationId(data)        
        }
        getConversationDetails()
    }, [person.googleId])

    useEffect(() => {
        const getMessageDetails = async () => {
            const messageData = await getMessage(conversation._id)
            setMessages(messageData.data)
        }
        getMessageDetails()
    }, [conversation?._id])
    
    return (
        <div className="chat-messages">
            <img src={ChatBg} alt="No bg"/>
            {
                messages && messages.map(message => (
                    <div>
                        <Message message={message}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Messages