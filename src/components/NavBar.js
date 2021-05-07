import React from 'react'
import '../style/NavBar.scss'

import { Nav, Navbar} from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

const styleForPageLink = {
    color: 'white',
    'fontWeight': 'bold'
}

const searhicon = {
    color: '#01b4e4',
    'fontSize': '30px'
}

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Navbar.Brand href="/" className="navbar1">
                <img
                    className="logo"
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="The Movie Database (TMDb)"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/movie" style={styleForPageLink}>Movies</Nav.Link>
                    <Nav.Link href="/tvshows" style={styleForPageLink}>TV Shows</Nav.Link>
                    <Nav.Link href="/people" style={styleForPageLink}>People</Nav.Link>
                    <Nav.Link href="/more" style={styleForPageLink}>More</Nav.Link>
                </Nav>

                <Nav className="navbar2">
                    <Nav.Link ><IconButton><AddIcon style={{ color: "white" }} /></IconButton></Nav.Link>
                    <Nav.Link className="navbarText" href="/"><p>EN</p></Nav.Link>
                    <Nav.Link ><IconButton ><NotificationsIcon style={{ color: "white" }} /></IconButton></Nav.Link>
                    <Nav.Link className="nameCircle" href="/"><p>C</p></Nav.Link>
                    <Nav.Link ><IconButton><SearchIcon style={searhicon} /></IconButton></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar;