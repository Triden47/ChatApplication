import { useState, useContext } from 'react';
import { Fab } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContext } from '../../context/AccountProvider';
import { GoogleLogout } from 'react-google-login';
import TemporaryDrawer from './Profile';
// import { compose } from '@mui/system';

const Header = () => {
    const { account, setAccount } = useContext(AccountContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const clientID = process.env.REACT_APP_GOOGLE_ID

    const onLogoutSuccess = () => {
        alert("You have been logged out successfully")
        console.clear()
        setAccount('')
    }

    const [ imgClick, setImgClick ] = useState(false)
    function onImgClick(event) {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        } else {
            setImgClick(true)
        }
    }
    function onImgClose() {
        setImgClick(false)
    }
    return (
        <div className="header">
            <div className="header-part1">
                <img onClick={onImgClick} src={ account.imageUrl } alt="Personal Pic"/>
            </div>
            {imgClick && <TemporaryDrawer open={true} close={onImgClose}/>}
            <div className="header-part2">
                <Fab size="small">
                    <ChatIcon/>
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
                    <MenuItem onClick={handleClose}>New group</MenuItem>
                    <MenuItem onClick={handleClose}>Starred</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <GoogleLogout
                            className="google-logout"
                            clientId={clientID}
                            isSignedIn={true}
                            buttonText="Logout"
                            // icon={false}
                            onLogoutSuccess={onLogoutSuccess}
                        />
                    </MenuItem>
                </Menu>
            </div>
            

        </div>
    )
}

export default Header