import React from 'react';
import { Container, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import avocat from "../../assets/portfolio/avocat.png";

const Avocat = () => {
    return (
        <Container className="portfolio-details" fluid={true}>
            <Container className="header">
                <h1>Avocat WordPress App</h1>
                <p>Développement - UI Design - UX Design</p>
            </Container>
            <Container className="containt">
                <div>
                    <h2>Le projet</h2>
                    <p className="center">
                        Il s'agit d'un site vitrine d'une avocate de la région PACA, réalisé grâce à Wordpress
                    </p>
                </div>
                <div>
                    <h2>Ma contribution</h2>
                    <p>
                        J'ai repris ce projet en cours de développement lors de mon stage chez Mandyben 
                        Communication et j'ai travaillé seule sur l'intégration des textes fournis par la cliente. 
                        J'ai également travaillé sur le design du site, sur le 
                        positionnement des éléments sur l'interface, et sur le développement SEO.
                    </p>
                </div>
                <div>
                    <h2>Le défi</h2>
                    <p>
                        Cette application était un défi car je n'avais jamais effectué de stage, et je n'avais encore jamais touché à WordPress. De plus, j'étais seule sur ce développement donc je n'avais personne vers qui me tourner. Le stage n'ayant duré qu'une semaine, il m'a fallu être très rapide dans la compréhension de ce système de gestion de contenu, sachant que avant cela, je n'avais développé qu'en HTML5, CSS3 et Bootstrap3.
                    </p>
                </div>
                <img src={avocat} alt=""/>
            </Container>
            <Button type="button"><Link to="/">Retour</Link></Button>
        </Container>
            )
        }
        
export default Avocat; 