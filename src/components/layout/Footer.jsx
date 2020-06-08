import React from 'react'
import { Container, Col, Row, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../style.scss'


const Footer = () => {
    return (
        <Container className="footer" fluid={true} id="contact">
            <Container className="contact">
                <p>Mon profil vous intéresse ?</p>
                <h3>Contactez-moi !</h3>
                <Row className="informations">
                    <Col>
                        <Row>
                            <p>EMAIL : </p>
                        </Row>
                        <Row>
                            <Button>isaureblaffa.pro@gmail.com</Button>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p>LINKEDIN : </p>
                        </Row>
                        <Row>
                            <Button type="button" className="button-linkedin"><a href="https://www.linkedin.com/in/isaureblaffa/" target="_blank">Voir mon profil</a></Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="legal">
           <ul>      
                <Link className="nav-link" to="/home">Mentions légales</Link>
                <Link className="nav-link" to="/">Politique de confidentialité</Link> 
            </ul>
        </div>
        </Container>
    )
}

export default Footer;