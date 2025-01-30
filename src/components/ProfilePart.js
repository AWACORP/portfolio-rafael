import "../styles/Banner.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/HomePart.css"; // Ajoute les styles CSS
import me from "../assets/images/me.png";

function ProfilePart() {
  return (
    <Container
      style={{ width: "100%", height: "840px" }}
    >
      <Row className="align-items-center h-100">
        <Col md={8}>
          <h1
            className="archivo-narrow"
            style={{
              fontWeight: "bold",
              fontSize: "110px",
              lineHeight: "100%",
            }}
          >
            A propos <br />
            de moi
          </h1>
          <p
            className="palanquin"
            style={{ fontWeight: "200", fontSize: "20px" }}
          >
            Avec une expertise en développement front-end et back-end, je me
            concentre sur la création d’expériences utilisateur agréables et
            performantes. J’ai également un fort intérêt pour l’UX/UI Design,
            les applications mobiles, et la conception de jeux vidéo. Curieux et
            créatif, j’adore apprendre et m’adapter à de nouveaux projets et
            technologies.
          </p>

          <Button variant="primary" className="full-btn nunito-sans">
            En savoir plus
          </Button>
        </Col>

        {/* Colonne de droite (Image) */}
        <Col md={4} className="flex-center">
          <div
            className="image-container align-items-center"
            style={{ marginLeft: "50px" }}
          >
            <img src={me} alt="Avatar" className="avatar-img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePart;
