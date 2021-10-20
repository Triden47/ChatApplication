import * as React from "react";
import { Input } from "@mui/material";
import { styled } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
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

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <Input
            components={{ Input: StyledInputElement }}
            disableUnderline={true}
            fullWidth={true}
            {...props}
            ref={ref}
        />
    );
});

function UnstyledInput() {
    return (
        <CustomInput aria-label="Demo input" placeholder="Type something..." />
    );
}

const ChatFooter = () => {
    return (
        <div className="chat-footer">
            <EmojiEmotionsIcon sx={{ color: "#1F6F8B", margin: "5px" }} />
            <AttachFileIcon sx={{ color: "#1F6F8B", margin: "5px" }} />
            <UnstyledInput />
            <SendIcon sx={{ color: "#1F6F8B", margin: "5px" }} />
        </div>
    );
};

export default ChatFooter;
