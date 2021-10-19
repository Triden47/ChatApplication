import { useContext } from 'react'
import { AccountContext } from "../../context/AccountProvider"


export default function IndividualConversation(props) {
    // console.log(props.user)

    const { account } = useContext(AccountContext)
    const setUser = () => {
        setConversation({ senderId: account.googleId, receiverId: props.user.googleId })
    }

    return (
        <div className="conversation" onClick={() => setUser()}>
            <img src={props.user.imageUrl} alt="NO dp"/>
            <h5>{props.user.givenName}</h5>
        </div>
    )
}
