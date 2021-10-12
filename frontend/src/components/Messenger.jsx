import React from 'react'

import {Card, Carousel } from 'react-bootstrap'
import GoogleIcon from '@mui/icons-material/Google';

//Components
import Login from './account/Login'

import '../css/homePage.css'
// import Monitor from '../images/monitor.png'



const cardStyle = {
    width: "25rem",
    border: "none",
    boxShadow: "0 0 0 5px #1F6F8B",
}

const Messenger = () => {
    return (
        <>
            <div className="home">
                <div className="home-part1">
                    <div>
                        <GoogleIcon sx={{ fontSize: "10rem" }}/>
                    <h1>EXT</h1>
                    </div>
                    
                </div>
                <div className="home-part2">
                {/* <img className="pc-img" src={Monitor} alt="None"/> */}
                    <Card className="text-center" style={ cardStyle }>
                        <Card.Header style={{ background: "#1F6F8B", border: "#1F6F8B solid" }}>Why Gext?</Card.Header>
                        <Card.Body>
                            <Carousel 
                            controls={false}
                            indicators={false}
                            variant="dark" 
                            style={{ height: "150px" }}>
                                <Carousel.Item>
                                    <h3>Its simple</h3>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h3>Doesn't require a phone number</h3>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h3>Instant messaging</h3>
                                </Carousel.Item>
                                
                            </Carousel>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
            <Login />
        </>
            
    )
}

export default Messenger