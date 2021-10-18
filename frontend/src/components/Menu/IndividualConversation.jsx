import { Box } from '@mui/system'

export default function IndividualConversation(props) {
    console.log(props.user)
    return (
        <div className="conversation">
            <img src={props.user.imageUrl} alt="NO dp"/>
            <h5>{props.user.givenName}</h5>
        </div>
    )
}
