import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom'
import avocat from "../../assets/portfolio/avocat.png";
import handipaca from "../../assets/portfolio/HandiPaca.png";
import surveys from "../../assets/portfolio/survey.png";
import wavager from "../../assets/portfolio/wavager.png";

const Portfolio = () => {
    return (
        <Container className="portfolio" fluid={true}>
            <div className="title">
                <p className="subtitle">Bonjour, je m'appelle Isaure Blaffa</p>
                <p>
                Je suis UX Designer junior, et je travaille au plus
                près des utilisateurs pour créer avec vous lesmeilleurs produits digitaux.
                </p>
            </div>
            <Container className="projects" fluid={true}>
                <Row>
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
                </Row>
                <Row>
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
            </Container>
        </Container>
    )
}

export default Portfolio; 