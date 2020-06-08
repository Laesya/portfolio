import React from 'react';
import { Container, Col, Row} from 'reactstrap';
import mindmap from "../../assets/about/mindmap.png";
import portrait from "../../assets/about/portrait.png";

const About = () => {
    return (
        <Container className="about" fluid={true}>
            <Container fluid={true}>
                <Row>
                    <Col className="presentation">
                        <p className="name">Je suis Isaure</p>
                        <p className="texte">Je suis UX Designer et je me concentre sur l'utilisateur (UX Research).
                            Je suis très motivée par la perspective de rejoindre une équipe 
                            soudée et utilisant une méthode agile.
                        </p>
                        <p>
                        Je suis une grande adepte des films, des séries et des jeux vidéos, et  
                        j’occupe une part de mon temps libre à la conception d’une suite de 
                        romans, dont le thème oscille entre fantaisie et monde médiéval. 
                        </p>
                    </Col>
                    <Col>
                        <img src={mindmap} alt="carte mentale personnelle" />
                    </Col>
                </Row>
            </Container>
            <Container fluid="true" className="CV">
                <Row>
                    <Col>
                        <h2>Expérience</h2>
                        <div>
                        <p className="poste">UX Designer <span>Alaxione</span></p>
                            <p className="dates">Alternance | 16 Mars 2020 - 31 Mai 2020</p>
                            <ul>
                                <li>
                                - Wireframing, prototypage
                                </li>
                                <li>
                                - Userflows
                                </li>
                                <li>
                                - UI Design
                                </li>
                                <li>
                                - Audit UX
                                </li>
                            </ul>
                        </div>  
                        <div>
                            <p className="poste">UI/UX Designer - Développeuse full-stack<span>Wild Code School</span></p>
                            <p className="dates">Stage | Septembre 2019 - Février  2020</p>
                            <ul>
                                <li>
                                - Wireframing, prototypage
                                </li>
                                <li>
                                - Architecture / développement back-end
                                </li>
                                <li>
                                - Architecture / développement front-end
                                </li>
                                <li>
                                - UI Design
                                </li>
                            </ul>
                        </div>   
                        <div>
                            <p className="poste">Développeuse front-end<span>Mandyben Communication</span></p>
                            <p className="dates">Stage | Décembre 2018</p>
                            <ul>
                                <li>
                                - Wordpress
                                </li>
                                <li>
                                - UI Design
                                </li>
                                <li>
                                - SEO
                                </li>
                            </ul>
                        </div>                                  
                    </Col>
                    <Col>
                        <h2>Distinctions</h2>
                        <div>
                            <p className="poste">Porteuse de projet | UI/UX Designer <span>Dataweek</span></p>
                            <p className="dates">Hackathon 48h - Juin 2019</p>
                            <ul>
                                <li>
                                Le projet remporte le deuxième prix.
                                </li>
                                <li>
                                - Conception du projet HandiPaca
                                </li>
                                <li>
                                - Gestion d'une équipe de 5 développeurs
                                </li>
                                <li>
                                - Cahier des charges
                                </li>
                                <li>
                                - Charte graphique
                                </li>
                                <li>
                                - Wireframe
                                </li>
                                <li>
                                - Architecture back-end
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="poste">Développeuse back-end <span>Wild Code School</span></p>
                            <p className="dates">Hackathon 28h - Avril 2019</p>
                            <ul>
                                <li>
                                Le projet remporte le prix coup de cœur
                                </li>
                                <li>
                                - Wireframe
                                </li>
                                <li>
                                - Architecture &amp; développement back-end
                                </li>
                                <li>
                                - Invention et mise en place d'une histoire
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Formation</h2>
                        <div>
                            <p className="poste">UI/UX Designer <span>Openclassrooms</span></p>
                            <p className="dates">Février 2020 - Aujourd'hui (en cours)</p>
                            <ul>
                                <li>
                                - Stratégie UX
                                </li>
                                <li>
                                - UX Research
                                </li>
                                <li>
                                - Wireframing
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="poste">Développeuse web &amp; mobile <span>Wild Code School</span></p>
                            <p className="dates">Février 2019 - Juillet 2019</p>
                            <ul>
                                <li>
                                - Conception d'application web
                                </li>
                                <li>
                                - Conception d'application mobile
                                </li>
                                <li>
                                - Intégration d'interface utilisateur
                                </li>
                                <li>
                                - Développement d'application web
                                </li>
                                <li>
                                - Développement d'application mobile
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="poste">Baccalauréat littéraire<span>Las Cases</span></p>
                            <p className="dates">Juin 2014</p>
                        </div>
                    </Col>
                    <Col>
                        <h2>Certificats</h2>
                        <div>
                            <p className="poste">Openclassrooms</p>
                            <ul>
                                <li>
                                UX Design: découvrez les fondamentaux
                                </li>
                                <li>
                                Appropriez-vous la démarche UX en pratique
                                </li>
                                <li>
                                Initiez-vous au Design Thinking
                                </li>
                                <li>
                                Menez une recherche utilisateur
                                </li>
                                <li>
                                Auditez l'expérience utilisateur
                                </li>
                                <li>
                                Communiquez et formalisez vos idées par le storytelling
                                </li>
                                <li>
                                Créez et appliquez une charte graphique
                                </li>
                                <li>
                                Gérez un projet digital avec une méthodologie en cascade
                                </li>
                                <li>
                                Réalisez le cahier des charges d'un projet digital
                                </li>
                            </ul>
                            <p className="poste">Google</p>
                            <p>
                            Fondamentaux du Marketing Digital
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="portrait" src={portrait} alt="" />
        </Container>
    )
}

export default About; 