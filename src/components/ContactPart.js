import "../styles/Banner.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/HomePart.css"; // Ajoute les styles CSS
import me from "../assets/images/me.png";

function ContactPart() {
  return (
    <Container style={{ width: "100%", height: "840px" }} id="contact">
      <Row className="align-items-center h-100">
        <Col md={6}>
          <h1
            className="archivo-narrow"
            style={{
              fontWeight: "bold",
              fontSize: "110px",
              lineHeight: "100%",
            }}
          >
            Discutons de <br />
            votre projet
          </h1>
          <p
            className="palanquin"
            style={{ fontWeight: "200", fontSize: "20px" }}
          >
            Vous avez une idée ou un projet ? <br />
            N'hésitez pas à me contacter pour en discuter. <br />
          </p>
          <p
            className="palanquin"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Je serais ravi de collaborer avec vous !
          </p>
        </Col>

        {/* Colonne de droite (Image) */}
        <Col md={6} className="flex-center">
          <p
            className="palanquin"
            style={{ fontWeight: "200", fontSize: "20px" }}
          >
            ns.rafael.1212@gmail.com
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPart;
