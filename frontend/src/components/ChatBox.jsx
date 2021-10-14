import { useContext } from 'react'
import '../css/chatBox.css'

//component
import Menu from './Menu/Menu' 
import PersistentDrawerLeft from './Menu/Profile'
import { DrawerContext } from '../context/DrawerProvider'

const ChatBox = () => {
    const { drawer } = useContext(DrawerContext)
    return (

            <div className="chat-box">
                <div className="chat-people">
                    <Menu />
                    <PersistentDrawerLeft/>
                </div>
                <div className="chat-messages">
                    Chat
                </div>
            </div>
    )
}
export default ChatBox