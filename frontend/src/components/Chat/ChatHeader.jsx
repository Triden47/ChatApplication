import { useState, useContext } from "react"
import { Fab, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search';
//components
import { UserContext } from "../../context/UserProvider"
import { AccountContext } from "../../context/AccountProvider";


const ChatHeader = () => {
    const { person } = useContext(UserContext)
    // const [status, setStatus] = useState(false)
    const { activeUsers } = useContext(AccountContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return ( 
        <div className="chat-header">
            <div className="chat-header-part1">
                <img src={ person.imageUrl } alt="No dp"/>
            </div>

            <div className="chat-header-part2">
                    <h3>{ person.givenName }</h3>
                    <p>
                    {activeUsers?.find(user => user.userId === person.googleId) ? "Online" : "Offline"}
                    </p>
            </div>
            <div className="chat-header-part3">
                <Fab size="small">
                    <SearchIcon/>
                </Fab>
                <Fab size="small"
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreVertIcon/>
                </Fab>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                >
                    <MenuItem onClick={handleClose}>Clear Message</MenuItem>
                    <MenuItem onClick={handleClose}>Delete Chat</MenuItem>
                    {/* <MenuItem onClick={handleClose}></MenuItem> */}
                </Menu>
            </div>
        </div>
    )
}

export default ChatHeader