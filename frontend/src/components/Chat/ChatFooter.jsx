import { useState, useEffect, useContext, forwardRef } from 'react'
import { IconButton, Input } from "@mui/material";
import { styled } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";


import { newMessage } from '../../api/api';
import { AccountContext } from '../../context/AccountProvider';
// import MicIcon from '@mui/icons-material/Mic'

const StyledInputElement = styled("input")(`
    width: 100%;
    font-size: 1rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.4375em;
    background: rgb(243, 246, 249);
    border: 1px solid #E5E8EC;

    padding: 6px 10px;
    color: #1F6F8B;
    transition: width 300ms ease;


  &:hover {
    background: #EAEEF3;
    border-color: #E5E8EC;
  }

  &:focus {
    outline: none;
    transition: width 200ms ease-out;
  }
`);

const CustomInput = forwardRef(function CustomInput(props, ref) {
    return (
        <Input
            components={{ Input: StyledInputElement }}
            aria-label="Demo input"
            placeholder="Type something..."
            disableUnderline={true}
            // fullWidth={true}
            sx={{ width: "85%" }}
            ref={ref}
            onChange={ props.handleChange }
            value={ props.value }
        />
    );
});

const ChatFooter = (props) => {

    const { account } = useContext(AccountContext)

    const [ text, setText ] = useState('')
    const [ change, setChange ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setText(change)
        // console.log(change)
        //Text contains the text entered by the person
        
        setChange('')        
    }

    useEffect(() => {
        const sendNewMessage = async () => {
            await newMessage({ conversationId: props.conversationId._id, sender: account.googleId, text: text })
        }
        sendNewMessage()
    }, [text])

    return (
        <div className="chat-footer">
            <EmojiEmotionsIcon sx={{ color: "#1F6F8B", margin: "10px 10px 10px 20px" }} />
            <AttachFileIcon sx={{ color: "#1F6F8B", margin: "10px" }} />
            <form onSubmit={ handleSubmit } style={{ width: "100%"}}>
                <CustomInput handleChange={(e) => { setChange(e.target.value)}} value={ change }/>
                {change.length >= 1 && <IconButton type="submit" sx={{ margin: "10px" }}><SendIcon sx={{ color: "#1F6F8B" }} /></IconButton>}
            </form>
        </div>
    );
};

export default ChatFooter;
