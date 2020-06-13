import React from 'react';
import { Container, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import coffeeMug from "../../assets/portfolio/coffeeMug.png";

const Coffee = () => {
    return (
        <Container className="portfolio-details" fluid={true}>
            <Container className="header">
                <h1>Etude de cas - café</h1>
                <p>UX Researcher - UX Designer - UI Designer</p>
            </Container>
            <Container className="containt">
                <div>
                    <h2>Le projet</h2>
                    <p className="center">
                    Travail en cours                    
                    </p>
                </div>
                <img src={coffeeMug} alt=""/>
            </Container>
            <Button type="button"><Link to="/">Retour</Link></Button>
        </Container>
            )
        }
        
export default Coffee; 