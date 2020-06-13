import React from 'react';
import { Container, Col, Row} from 'reactstrap';
import mindmap from "../../assets/about/mindmap.png";
import { Accordion, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about" fluid={true}>
            <Container fluid={true}>
                <Row>
                    <Col className="presentation">
                        <img className="mindmap" src={mindmap} alt="carte mentale personnelle" />            
                        <p className="texte">Plus jeune, je m’amusais à retracer les péripéties des personnages de mes livres favoris, à comprendre ce qui pouvait les pousser à prendre telle ou telle direction, et en commençant à écrire mon premier roman, j’ai rapidement découvert que mes propres personnages étaient amenés à faire des choix…auxquels je n’avais même pas pensé !
                        </p>
                        <p>
                        J’aimerais me spécialiser en UX Research, peut être également en UX Writing, car cela me permettrait de relier mon besoin de compréhension ainsi que mon amour de l’écriture et d’être pleinement épanouie. C’est pourquoi je cherche activement un emploi dans lequel je pourrais monter en compétence sur ces deux domaines, tout en étant accompagnée grâce à l’alternance.
                        </p>
                    </Col>     
                </Row>
            </Container>
            <Container className="recommandations">
            <h2>Ils l'ont dit : </h2>
            <p>Un témoigagne vous intéresse ? Cliquez dessus pour en lire plus !</p>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Thibaut Marlien, Campus Manager chez Wild Code School
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>"Isaure a effectué un stage de 5 mois en tant qu'assistante formatrice à la Wild Code School. Durant celui-ci, elle a su démontrer de bonnes capacités dans l'<span>animation d'ateliers</span> pour les élèves développeurs. Sa passion pour la <span>transmission</span> de connaissance et l'accompagnement s'est largement fait ressentir, et les retours des apprenants ont été très positifs. En fin de stage, elle a également participé au recrutement des futurs élèves avec un regard et un <span>jugement maîtrisés et pertinents</span>. Je la recommande fortement pour de futures expériences professionnelles."</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        David Marie, React.js Ruby on Rail &amp; Node.JS Developper
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>"J'ai eu l'occasion d'enseigner à Isaure durant sa formation à la Wild Code School. Isaure est quelqu’un de <span>très dynamique</span> et qui <span>aime faire bouger les choses dans le bon sens</span>.
                                    Elle aime aussi les <span>challenges techniques</span> et se donne les moyens de les surmonter. Durant la réalisation des projets clients, Isaure a eu de nombreux échanges avec les intéressés et a toujours eu le souci de répondre le plus exactement possible a leurs demandes. Doté aussi d'un <span>esprit très créatif</span>, Isaure a été <span>à l'origine de nombreuses propositions</span> techniques et graphiques. Ce qui a permit de donner un résultat vraiment très satisfaisant pour un projet réalisé par des élèves développeurs depuis seulement quelques mois.
                                    Isaure est certes un profil junior mais elle possède de nombreuses qualités, recherché dans les offres d'emploi les plus exigeantes. "</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </Container>
    )
}

export default About; 
