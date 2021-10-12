import React from 'react'
// import { AppBar, Toolbar } from '@mui/material'
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GoogleIcon from '@mui/icons-material/Google';
import Login from './account/Login'
import '../css/homePage.css'

const Messenger = () => {
    // const atStyle = {
    //     color: 'orange',
    //     fontSize: 300,

    // }
    return (
        <>
            <div className="home">
                <div className="home-part1">
                    <div>
                        <GoogleIcon sx={{ fontSize: "10rem"}}/>
                    <h1>EXT</h1>
                    </div>
                    
                </div>
                <div className="home-part2">
                    <div>
                        <h2>Why Gext?</h2>
                        <p>Gext is a gmail based chat app which doesn't require a phone number, just enter your mail and start GEXTING</p>
                    </div>
                    
                </div>
                
                
            </div>
            <Login />
        </>
            
    )
}

export default Messenger