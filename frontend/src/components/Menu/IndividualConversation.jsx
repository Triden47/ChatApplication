import { useState, useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { UserContext } from '../../context/UserProvider'
import { setConversation } from '../../api/api.js'

const IndividualConversation = (props) => {
    // console.log(props.user)

    const { account } = useContext(AccountContext)
    const { setPerson } = useContext(UserContext)

    

    const setUser = async () => {
        props.setBgChange(props.user.googleId)
        setPerson(props.user)
        await setConversation({ senderId: account.googleId, receiverId: props.user.googleId })
    }

    return (
        <div className="conversation" onClick={() => setUser()} style={{backgroundColor: props.bg}}>
            <img src={props.user.imageUrl} alt="NO dp"/>
            <h5>{props.user.givenName}</h5>
        </div>
    )
}

export default IndividualConversation