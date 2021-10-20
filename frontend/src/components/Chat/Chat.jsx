import { useContext } from 'react'

//components
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import ChatFooter from './ChatFooter'
import { UserContext } from '../../context/UserProvider'


const Chat = () => {
    const { person } = useContext(UserContext)
    console.log(person)
    return (
        <div>
            {Object.keys(person).length !== 0 && 
            <div>
                <ChatHeader/>
                <Messages/>
                <ChatFooter/>
            </div>}
        </div>
    )
}

export default Chat