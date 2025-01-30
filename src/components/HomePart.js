import "../styles/Banner.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/HomePart.css"; // Ajoute les styles CSS
import me from "../assets/images/me.png";

function HomePart() {
  return (
    <Container style={{ width: "100%", height: "720px" }}>
      <Row className="align-items-center h-100">
        <Col md={8}>
          <h2 className="nunito-sans" style={{ color: "#484848", fontWeight: "200"}}>NUNES Joao-Rafael</h2>
          <h1 className="archivo-narrow" style={{ fontWeight: "bold", fontSize: "110px", lineHeight: "100%"}}>Full Stack Developer</h1>
          <p className="palanquin" style={{ fontWeight: "200", fontSize: "20px"}}>
            Je me spécialise principalement dans le développement web. <br/>
            J’aime aussi explorer l’UX/UI Design, créer des applications web et
            mobiles, développer des jeux vidéo, et bien plus encore.
          </p>
          <p className="palanquin" style={{ fontWeight: "bold", fontSize: "20px"}}>
            Ouvert à tout type de projet. 🚀
          </p>

          <div className="d-flex gap-5">
            <Button variant="primary" className="full-btn nunito-sans">
              Mon CV
            </Button>
            <Button variant="outline-primary" className="empty-btn nunito-sans">
              Me contacter
            </Button>
          </div>
        </Col>

        {/* Colonne de droite (Image) */}
        <Col md={4} className="flex-center">
          <div className="image-container align-items-center" style={{marginLeft: "50px"}}>
            <img src={me} alt="Avatar" className="avatar-img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePart;
