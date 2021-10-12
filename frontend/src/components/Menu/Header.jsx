import { useContext } from 'react';
import { Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContext } from '../../context/AccountProvider';

const Header = () => {
    const { account } = useContext(AccountContext)
    return (
        <div className="header">
            <div className="header-part1">
                <img src={ account.imageUrl } alt="Personal Pic"/>
            </div>

            <div className="header-part2">
                <Fab size="small">
                    <ChatIcon/>
                </Fab>
                <Fab size="small">
                    <MoreVertIcon/>
                </Fab>
            </div>
            

        </div>
    )
}

export default Header