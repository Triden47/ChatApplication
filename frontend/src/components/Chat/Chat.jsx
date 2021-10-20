import { useState, useContext } from 'react'

//components
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import ChatFooter from './ChatFooter'
import { UserContext } from '../../context/UserProvider'


const Chat = () => {
    const { person } = useContext(UserContext)
    const [ conversationId, setConversationId ] = useState('')

    return (
        <div>
            {Object.keys(person).length !== 0 && 
            <div style={{ minWidth: "500px" }}>
                <ChatHeader />
                <Messages setConversationId={(id) => { setConversationId(id) }}/>
                <ChatFooter conversationId={ conversationId }/>
            </div>}
        </div>
    )
}

export default Chat