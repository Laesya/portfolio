import React from 'react';
import { Container, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import survey from "../../assets/portfolio/survey.png";

const Surveys = () => {
    return (
        <Container className="portfolio-details" fluid={true}>
            <Container className="header">
                <h1>Wild Surveys</h1>
                <p>Développement fullstack - UX Design -  UI Design - Wireframe</p>
            </Container>
            <Container className="containt">
                <div>
                    <h2>Le projet</h2>
                    <p>
                        Chaque mois, l'école Wild Code School propose à ses étudiants de répondre à un 
                        sondage réalisé avec Google Form. L'outil étant malheureusement peu adapté, il m'a 
                        été demandé de réaliser une application web sur laquelle les étudiants pourraient 
                        répondre à ce sondage mensuel, qui correspondrait à l'image de marque de l'école.
                    </p>
                </div>
                <div>
                    <h2>Ma contribution</h2>
                    <p>
                        Etant seule sur ce projet, j'ai travaillé sur sa conception (userflows, wireframes et 
                        prototypes) et sur son développement front-end et back-end. 
                    </p>
                </div>
                <div>
                    <h2>Le défi</h2>
                    <p>
                        Il s'agissait de créer une application from scratch et sans équipe, avec des 
                        technologies backend que je ne connaissais pas, comme le NoSQL. N'ayant jusque là 
                        utilisé que du MySQL, je ne connaissais pas MongoDB ni mongoose, et il a été difficile 
                        de surmonter la logique très relationnelle que je possèdais.
                    </p>
                </div>
                <div>
                    <h2>Stratégie de produit</h2>
                    <p>
                        La compréhension des besoins du clients était primordiale, il s'agissait de créer une 
                        application utilisable sur du long terme, avec une base de données très fournie et 
                        surtout il fallait prévoir la scalabilité de l'application. Les besoins utilisateurs étaient 
                        également importants, puisqu'il s'agissait de leur proposer un sondage mensuel, donc 
                        très répétitif, il fallait que ce soit rapide et facile à faire.
                    </p>
                </div>
                <div>
                    <h2>Interface</h2>
                    <p>
                        Mon approche a été la simplicité.  Le logotype est l’emblème de la marque. En combinant une forme, des couleurs et un graphisme spécifique, il constitue l’élément fédérateur de l’identité de Wild Code School. J'ai repris le brandbook de la Wild Code School afin de m'inspirer de ce qui était déjà existant et que l'image de marque de l'école soit bien représentée
                    </p>
                </div>
                <img src={survey} alt=""/>
            </Container>
            <Button type="button"><Link to="/">Retour</Link></Button>
        </Container>
            )
        }
        
export default Surveys; 