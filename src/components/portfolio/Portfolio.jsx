import React from 'react';
import { Container } from 'reactstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import avocat from "../../assets/portfolio/avocat.png";
import handipaca from "../../assets/portfolio/HandiPaca.png";
import surveys from "../../assets/portfolio/survey.png";
import wavager from "../../assets/portfolio/wavager.png";
import coffeeMug from "../../assets/portfolio/coffeeMug.png";
import portrait from '../../assets/about/portrait.png';

const Portfolio = () => {
    return (
        <Container className="portfolio" fluid={true}>
            <Container fluid={true}>
                <Row className="header">
                    <Col className="presentation">
                        <p className="name">Hello !</p>
                        <p className="texte">Je suis Isaure, UX Designer junior, et je travaille au plus
                près des utilisateurs pour créer avec vous les meilleurs produits digitaux.
                        </p>
                        <Row className="cta">
                            <a href="https://www.linkedin.com/in/isaureblaffa/" target="_blank" rel="noopener noreferrer" className="btn">Discutons</a>
                        </Row>
                    </Col>
                    <Col className="portrait">
                        <img src={portrait} alt="carte mentale personnelle" />
                    </Col>
                </Row>
            </Container>
            <Container className="projects" fluid={true}>
                <Row xs={1} md={2}>
                    <Col>
                    <Link className="nav-link" to="/coffee" className="computer"><img src={coffeeMug} alt=""/></Link>
                    <Link className="nav-link" to="/coffee" className="mobile">En savoir plus</Link>
                        <p>(&agrave; venir) Etude de cas - café</p>
                        <p className="subtitle">UX Researcher - UX Designer - UI Designer</p>
                    </Col>
                    <Col>
                    <Link className="nav-link" to="/surveys" className="computer"><img src={surveys} alt=""/></Link>
                    <Link className="nav-link" to="/surveys" className="mobile">En savoir plus</Link>
                        <p>Wild Survey App</p>
                        <p className="subtitle">Développement - UI Design - UX Design</p>
                    </Col>
                    <Col>
                    <Link className="nav-link" to="/handipaca" className="computer"><img src={handipaca} alt=""/></Link>
                    <Link className="nav-link" to="/handipaca" className="mobile">En savoir plus</Link>
                        <p>Accessibilité Handicap App</p>
                        <p className="subtitle">Chef de projet - Branding</p>
                    </Col>
                    <Col>
                        <Link className="nav-link" to="/wavager" className="computer"><img src={wavager} alt=""/></Link>
                        <Link className="nav-link" to="/wavager" className="mobile">En savoir plus</Link>
                        <p>Accessibilité en Voyage  App</p>
                        <p className="subtitle">Développement - UI Design</p>
                    </Col>
                    <Col>
                    <Link className="nav-link" to="/avocat" className="computer"><img src={avocat} alt=""/></Link>
                    <Link className="nav-link" to="/avocat" className="mobile">En savoir plus</Link>
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
