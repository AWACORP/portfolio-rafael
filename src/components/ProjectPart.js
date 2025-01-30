import "../styles/Banner.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/HomePart.css"; // Ajoute les styles CSS
import me from "../assets/images/me.png";
import ProjectList from "./ProjectList";

function ProjectPart() {
  return (
    <Container style={{ width: "100%", height: "840px" }} id="projects">
      <Row className="align-items-center h-100">
        <Col md={12}>
          <h1
            className="archivo-narrow"
            style={{
              fontWeight: "bold",
              fontSize: "110px",
              lineHeight: "100%",
            }}
          >
            Mes dernières <br />
            réalisations
          </h1>
        </Col>

        {/* Colonne de droite (Image) */}
        <Col md={12} className="flex-center">
          <ProjectList />
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectPart;
