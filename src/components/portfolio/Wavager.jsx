import React from 'react';
import { Container, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import wavager from "../../assets/portfolio/wavager.png";
import wavagerLogo from "../../assets/portfolio/wavager-logo.png";

const Wavager = () => {
    return (
        <Container className="portfolio-details" fluid={true}>
            <Container className="header">
                <h1>Wavager</h1>
                <p>Développement frontend - Iconographie -  Wireframe - UI Design - Android</p>
            </Container>
            <Container className="containt">
                <div>
                    <h2>Le projet</h2>
                    <p>
                        Notre client, C.G.B Creative, s'est tourné vers nous pour la création l'application
                        mobile Wavager, qui propose aux voyageurs une carte du monde sur laquelle ils 
                        peuvent trouver ou ajouter des points d'intérêts (loisirs, camping, stations essences, 
                        lieux tels que des cascades…).Wavager a également une dimension sociale puisque les utilisateurs pourront 
                        également voir les autres voyageurs membres à proximités et ainsi discuter avec par 
                        messagerie privée.
                    </p>
                </div>
                <div>
                    <h2>Ma contribution</h2>
                    <p>
                        Wavager est le tout premier projet client 'from scratch' qu'il m'a été donné de réaliser, en plus d'être ma première application mobile. Bien que les clients nous aient transmi beaucoup d'informations importantes (wireframe, iconographie...), nous avons eu à coeur de leur transmettre un MVP le plus cohérent et complet possible. Pour cela, j'ai retravaillé chaque icône afin de proposer aux clients un jeu d'icône cohérent et agréable à l'oeil, et je leur aie également proposé un nouveau logotype, accompagné d'une charte graphique complète, en plus du développement front-end de l'application.
                    </p>
                </div>
                <div>
                    <h2>Le défi</h2>
                    <p>
                        Alors que nous étions en plein apprentissage du framework React, le lancement de 
                        ce troisième projet de formation a été un véritable défi car il s'agissait pour nous de 
                        découvrir React Native, chose qui n'était pas aisée car c'était un développement bien 
                        différent de ce que nous avions appréhendé jusque là. De plus, nous n'avions aucune 
                        idée de l'expérience utilisateur sur mobile et nous n'avions encore jamais eut de 
                        contact client.
                    </p>
                </div>
                <div>
                    <h2>Image de marque</h2>
                    <p>
                        Pour exprimer leur esprit aventurier, les clients ont opté pour une prédominance de 
                        vert. Au cours du projet, je leur ait proposé une nouvelle version de leur logotype, 
                        basée sur celui qu'ils nous ont transmis.
                    </p>
                    <img src={wavagerLogo} alt="" />
                </div>
                <div>
                    <h2>Notre stratégie</h2>
                    <p>
                        La compréhension des besoins des utilisateurs était cruciale afin de créer un produit réussi qu'ils aimeraient utiliser. Les utilisateurs devaient pouvoir utiliser à chaque instant, de chez eux ou en pleine nature. Il était donc nécessaire qu'ils trouvent ce qu'ils recherchaient en quelques clics et que les couleurs choisies ne soient pas trop vives afin de ne pas heurter leur sensibilité visuelle, par exemple dans des situations de faible luminosité.
                    </p>
                    <p>
                        Pour concevoir le MVP, il fallait prêter attention à l'intégralité du parcours utilisateur, de 
                        la découverte à l'utilisation réelle. Nous avons donc fait tester l'application à nos 
                        camarades en formation avec nous, mais également à des proches ne touchant pas, 
                        de près ou de loin, au monde numérique.
                    </p>
                </div>
                <div>
                    <h2>Interface</h2>
                    <p>
                        Notre approche a été d'allier élégance et simplicité. Etant donné que nous utilisions 
                        une application riche en icones, l'objectif principal était de trouver une véritable 
                        harmonie pour ces dernières. Nous devions faire en sorte que l'interface ne soit pas 
                        surchargée, que ce soit par le nombre d'icônes ou la quantité de couleurs utilisées 
                        pour ces dernières.
                    </p>
                </div>
                <img src={wavager} alt=""/>
            </Container>
            <Button type="button"><Link to="/">Retour</Link></Button>
        </Container>
            )
        }
        
export default Wavager; 