import { useContext } from 'react'
import { AccountContext } from "../../context/AccountProvider"

const inlineStyle = {
    "textAlign": "end"
}

const userStyle = {
    "backgroundColor": "#1F6F8B",
    "color": "white"
}

const otherStyle = {
    "backgroundColor": "white",
    "color": "black"
}

const Message = ({ message }) => {

    const formatDate = (date) => {
        return date < 10 ? '0' + date : date
    }

    const { account } = useContext(AccountContext)

    return (
        <div style={account.googleId === message.sender ? inlineStyle : {}}>
            <div className="message" style={account.googleId === message.sender ? userStyle : otherStyle}>
                <h5>{message.text}</h5>
                <p>{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</p>
            </div>
        </div>
    )
}

export default Message