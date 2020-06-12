import React from 'react'
import { Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../style.scss'

const Footer = () => {
    return (
        <Container className="footer" fluid={true} id="contact">
            <Container className="contact" fluid={true}>
                <div className="bg-color"> 
                    <div className="cta-wrapper">
                        <h3>- &Agrave; la recherche d&rsquo;une alternance -<br/>(UXDesign : UX Researcher / UX Writing)</h3> 
                        <Row>
                            <a href="/cv_isaure_blaffa.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-light btn-large">T&eacute;l&eacute;chargez mon CV</a>    
                        </Row>
                        <Row>
                            <a href="https://www.linkedin.com/in/isaureblaffa/" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-large">Discutons</a>
                        </Row>  
                        <Row>
                            <p>isaureblaffa.pro@gmail.com</p>    
                        </Row>                       
                    </div>
                </div>
            </Container>
            <div className="legal">
                <Link className="nav-link" to="/legal">Mentions légales</Link>
            </div>
        </Container>
    )
}

export default Footer;