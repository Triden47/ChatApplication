import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Login from './account/Login'


const Messenger = () => {
    const atStyle = {
        color: 'orange',
        fontSize: 300,

    }
    return (
        <>
            <AppBar sx={{ 
                height: 200,
                background: 'violet',
                boxShadow: 'none',
                position: 'relative',
            }}>
                <Toolbar></Toolbar>
            </AppBar>
            {/* <AlternateEmailIcon className="at-icon" sx={ atStyle }/> */}

            <Login />
        </>
    )
}

export default Messenger