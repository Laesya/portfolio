import React from 'react';
import { Navbar , Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../style.scss'


const Navbar1 = () => {
    return (
          <Navbar collapseOnSelect expand="lg" className="navbar-style justify-content-end" >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav navbar-style">
              <Link className="nav-link" to="/">Accueil</Link>
              <Link className="nav-link" to="/alternance">Alternance</Link>
              <Link className="nav-link" to="/about">&Agrave; propos</Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar1;


