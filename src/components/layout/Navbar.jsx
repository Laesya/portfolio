import React from 'react'
import { Nav, Container } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../style.scss'


const Navbar = () => {
    return (
        <Container className="navbar-style" id="top" fluid="true">
           <Nav className="nav">      
                <Link className="nav-link" to="/">Accueil</Link>
                <Link className="nav-link" to="/alternance">L'alternance</Link> 
                <Link className="nav-link" to="/about">A propos</Link>
                <a className="nav-link" href="#contact">Contact</a>
            </Nav>
        </Container>
    )
}

export default Navbar;