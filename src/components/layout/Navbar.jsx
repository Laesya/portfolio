import React from 'react';
import { Navbar , Nav} from 'react-bootstrap';
import '../../style.scss'


const Navbar1 = () => {
    return (
          <Navbar collapseOnSelect expand="lg" className="navbar-style justify-content-end" >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav navbar-style">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/alternance">Alternance</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar1;


