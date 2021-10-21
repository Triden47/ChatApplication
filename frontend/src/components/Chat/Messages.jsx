import { useState, useEffect, useContext } from 'react'

//components
import ChatBg from '../../images/ChatBg.jpg'
import { UserContext } from '../../context/UserProvider'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../api/api'


const Messages = (props) => {

    const { account } = useContext(AccountContext)
    const { person } = useContext(UserContext)

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ sender: account.googleId, receiver: person.googleId })
            props.setConversationId(data)        
        }
        getConversationDetails()
    }, [person.googleId])
    
    return (
        <div className="chat-messages">
            <img src={ChatBg} alt="No bg"/>
            Messages
        </div>
    )
}

export default Messages