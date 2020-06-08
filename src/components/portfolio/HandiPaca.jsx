import React from 'react';
import { Container, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import handipaca from "../../assets/portfolio/HandiPaca.png";

const HandiPaca = () => {
    return (
        <Container className="portfolio-details" fluid={true}>
            <Container className="header">
                <h1>HandiPaca</h1>
                <p>Porteuse de projet - Chef de projet - Branding -  Wireframe - UI Design - Architecture back-end </p>
            </Container>
            <Container className="containt">
                <div>
                    <h2>Le projet</h2>
                    <p>
                        L'objectif était de concevoir une plateforme améliorant le quotidien des personnes à 
                        mobilité réduites. L'application devrait permettre à l'utilisateur de signaler les places 
                        handicapées existantes en région Paca (en utilisant notamment les données 
                        disponibles sur data.gouv.fr), et également de signaler les lieux de loisirs (restaurants, 
                        cinémas…) accessibles aux personnes à mobilité réduite.
                    </p>
                    <p>
                        HandiPaca est également prévue pour être utilisée par les autorités locales, les utilisateurs
                        pouvant également leur signaler des manquements urbains (tailles et inclinaisons des trottoirs,
                        absences de rampes dans les locaux publics...)
                    </p>
                </div>
                <div>
                    <h2>Ma contribution</h2>
                    <p>
                    J'ai été l'inventrice d'HandiPaca, et j'ai eut la chance de travailler avec une équipe qui s'est immédiatement impliquée. C'est un projet qui me tient particulièrement à cœur car il m'a été inspiré par une amie très proche en situation de handicap.
                    En tant que porteuse et chef de projet, j'ai été impliquée dans tout, de la conception d'interface UI et UX à l'architecture front-end et back-end,
                    </p>
                </div>
                <div>
                    <h2>Notre approche</h2>
                    <p>
                        J’avais seulement 48 heures pour réunir une équipe autour de moi, conceptualiser le projet (cahier des charges, logotype, colorimétrie, iconographie, choix du jeu de données public à utiliser, schématisation de la base de données…).
                        Mon approche a été d'allier praticité et simplicité. L'idée étant que l'utilisateur puisse signaler la présence ou le manque d'aménagement à un endroit précis d'une ville de la région, il était nécessaire que cela puisse être fait alors que l'utilisateur est en déplacement, d'où le choix d'une application mobile.
                    </p>
                    <p>
                    Il fallait limiter un maximum le nombre de clics à effectuer sur l'application, afin qu'un signalement soit fait très rapidement.
                    Concernant l'application web dédiée aux autorités locales, il fallait également qu'elle puisse être la plus simple possible d'utilisation compte tenu de la scalabilité possible des signalements.
                    </p>
                </div>
                <div>
                    <h2>Et la suite ?</h2>
                    <p>
                    L'application a été réalisée lors de hackathon de la Dataweek, et toute l'équipe étant 
encore en formation à la Wild Code School, son développement a été mis en suspens. Nous sommes fiers d'avoir remporté la deuxième place du podium lors du hackathon de la Dataweek !
                    </p>
                </div>
                <img src={handipaca} alt=""/>
            </Container>
            <Button type="button"><Link to="/">Retour</Link></Button>
        </Container>
            )
        }
        
export default HandiPaca; 