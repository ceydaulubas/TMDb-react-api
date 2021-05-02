import React from 'react'
import '../style/NavBar.scss'

import { Nav, Navbar} from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';

const NavBar = () => {
    return (

        <Navbar className="color-nav">
            <Navbar.Brand href="#home" className="navbar1" style={{ color: 'white' }}>
                <img
                    className="x"
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="The Movie Database (TMDb)"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home" style={{ color: 'white' }}>Filmler</Nav.Link>
                <Nav.Link href="#features" style={{ color: 'white' }}>Diziler</Nav.Link>
                <Nav.Link href="#pricing" style={{ color: 'white' }}>Kisiler</Nav.Link>
                <Nav.Link href="#pricing" style={{ color: 'white' }}>Daha Fazla</Nav.Link>
            </Nav>
            <Nav className="navbar2">
            <IconButton><AddIcon style={{color: "white"}}/></IconButton>
            <IconButton><NotificationsIcon style={{color: "white"}}/></IconButton>
            <Navbar.Brand class="circle" >C</Navbar.Brand>
            {/* <div class="circle" > C </div> */}
            </Nav>
        </Navbar>

    )
}

export default NavBar;