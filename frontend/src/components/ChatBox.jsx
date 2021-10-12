import '../css/chatBox.css'

//component
import Menu from './Menu/Menu' 

const ChatBox = () => {
    return (

            <div className="chat-box">
                <div className="chat-people">
                    <Menu/>
                </div>
                <div className="chat-messages">
                    Chat
                </div>
            </div>
    )
}
export default ChatBox