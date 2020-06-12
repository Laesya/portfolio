import React from 'react';
import { Container } from 'reactstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import avocat from "../../assets/portfolio/avocat.png";
import handipaca from "../../assets/portfolio/HandiPaca.png";
import surveys from "../../assets/portfolio/survey.png";
import wavager from "../../assets/portfolio/wavager.png";
import portrait from '../../assets/about/portrait.png';
const Portfolio = () => {
    return (
        <Container className="portfolio" fluid={true}>
            <Container fluid={true}>
                <Row className="header">
                    <Col className="presentation">
                        <p className="name">Je suis Isaure</p>
                        <p className="texte">Je suis UX Designer junior, et je travaille au plus
                près des utilisateurs pour créer avec vous les meilleurs produits digitaux.
                        </p>
                        <p>
                        Je suis une grande adepte des films, des séries et des jeux vidéos, et  
                        j’occupe une part de mon temps libre à la conception d’une suite de 
                        romans, dont le thème oscille entre fantaisie et monde médiéval. 
                        </p>
                    </Col>
                    <Col className="portrait">
                        <img src={portrait} alt="carte mentale personnelle" />
                    </Col>
                </Row>
            </Container>
            <Container className="projects" fluid={true}>
                <Row xs={1} md={2}>
                    <Col>
                    <Link className="nav-link" to="/handipaca"><img src={handipaca} alt=""/></Link>
                        <p>Accessibilité Handicap App</p>
                        <p className="subtitle">Chef de projet - Branding</p>
                    </Col>
                    <Col>
                        <Link className="nav-link" to="/wavager"><img src={wavager} alt=""/></Link>
                        <p>Accessibilité en Voyage  App</p>
                        <p className="subtitle">Développement - UI Design</p>
                    </Col>
                    <Col>
                    <Link className="nav-link" to="/surveys"><img src={surveys} alt=""/></Link>
                        <p>Wild Survey App</p>
                        <p className="subtitle">Développement - UI Design - UX Design</p>
                    </Col>
                    <Col>
                    <Link className="nav-link" to="/avocat"><img src={avocat} alt=""/></Link>
                        <p>Avocat Wordpress App</p>
                        <p className="subtitle">Développement - UI Design</p>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    
                </Row>
            </Container>
        </Container>
    )
}

export default Portfolio; 
