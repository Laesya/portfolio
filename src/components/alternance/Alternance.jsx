import React from 'react';
import { Container, Row} from 'reactstrap';
import Col from 'react-bootstrap/Col'
import oc from "../../assets/alternance/oc.png";
const Alternance = () => {
    return (
        <Container className="alternance" fluid={true}>
            <Container fluid={true}>
                <Row>
                    <Col className="presentation">
                        <h1 className="title">L'alternance</h1>
                        <p>Je recherche activement l'entreprise avec qui je travaillerais dans le cadre d'un contrat de professionnalisation !</p>
                        <p>
                        Vous trouverez ici des informations sur le fonctionnement de l'alternance chez Openclassrooms, mais si vous avez la moindre question supplémentaire, vous pouvez me contacter ou contacter directement l'école à cette adresse: <span>corporate@openclassrooms.com</span>
                        </p>
                    </Col>
                    <Col className="oc">
                        <img src={oc} alt="Openclassrooms' logotype" />
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="details">
              <Row>
                <Col sm>
                  <div>
                    <h2 className="nomargin">Apprendre par la pratique</h2>
                    <p>J’apprends directement en pratiquant sur les projets de formations, en discutant avec mon mentor de formation, et en puisant dans les inestimables ressources que sont internet et les autres UX Designers. </p>
                  </div>
                  <div>
                    <h2>Un mentor individuel</h2>
                    <p>Je dispose tout au long de ma formation d’un mentor UX Designer qui me conseille sur mes projets de formation, mais également au besoin et avec votre autorisation, sur des questions liées aux projets d’entreprise. </p>
                  </div>
                </Col>
                <Col sm>
                    <div>
                      <h2 className="nomargin">Une durée adaptable</h2>
                      <p>Il s’agit d’une formation de 24 mois, mais il est possible qu’elle arrive à terme avant le contrat lui-même, selon mon avancement. Dans ce cas, je travaillerais à temps plein jusqu'à fin du contrat. </p>
                    </div>
                    <div>
                      <h2>Un rythme flexible</h2>
                      <p>Je serais en formation 1 à 2 jours par semaine. C’est adaptable, donc si je suis censée être en formation le vendredi mais qu’il y a un besoin urgent, il est tout à fait possible de déplacer ce jour de formation à un autre jour de la semaine.</p>
                    </div>
                </Col>
              </Row>
            </Container>
        </Container>
    )
}

export default Alternance; 
