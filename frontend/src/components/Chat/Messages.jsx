import { useState, useEffect, useContext } from 'react'

//components
import ChatBg from '../../images/ChatBg.jpg'
import { UserContext } from '../../context/UserProvider'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation, getMessage } from '../../api/api'
import  Message from './Message'

const Messages = (props) => {

    const { account, socket, newMessageFlag } = useContext(AccountContext)
    const { person } = useContext(UserContext)

    const [ conversation, setConversation ] = useState({})

    const [ messages, setMessages ] = useState([])
    const [ latestMessage, setLatestMessage ] = useState(null)

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ sender: account.googleId, receiver: person.googleId })
            setConversation(data)
            // console.log(conversation)
            props.setConversationId(data)        
        }
        getConversationDetails()
    }, [person.googleId])

    useEffect(() => {
        const getMessageDetails = async () => {
            const messageData = await getMessage(conversation._id)
            // console.log(messageData)
            setMessages(messageData.data)
        }
        getMessageDetails()
    }, [conversation?._id, person.googleId, newMessageFlag])

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setLatestMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        latestMessage && conversation?.members?.includes(latestMessage.sender) && setMessages(prev => [...prev, latestMessage])
    }, [latestMessage])
    
    return (
        <div className="chat-msg">
            <img src={ChatBg} alt="No bg"/>
            <div className="chat-messages">
            {
                messages && messages.slice(0).reverse().map(message => (
                    <div key={message._id}>
                        <Message message={message}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Messages