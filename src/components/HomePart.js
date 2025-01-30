import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/Banner.css";
import "../styles/HomePart.css"; // Ajoute les styles CSS
import me from "../assets/images/me.png";

function HomePart() {
  return (
    <Container
      style={{ width: "100%", minHeight: "720px"}}
      id="home"
    >
      <Row className="align-items-center" style={{ minHeight: "720px" }}>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
           className="d-flex justify-content-center align-items-center flex-column text-md-start text-center d-md-block">
            <h2
              className="nunito-sans"
              style={{ color: "#484848", fontWeight: "200" }}
            >
              NUNES Joao-Rafael
            </h2>
            <h1
              className="archivo-narrow"
              style={{
                fontWeight: "bold",
                fontSize: "5rem",
                lineHeight: "100%",
              }}
            >
              Full Stack <br />
              Developer
            </h1>
            <p
              className="palanquin"
              style={{ fontWeight: "200", fontSize: "1.2rem" }}
            >
              Je me spécialise principalement dans le développement web. <br />
              J’aime aussi explorer l’UX/UI Design, créer des applications web
              et mobiles, développer des jeux vidéo, et bien plus encore.
            </p>
            <p
              className="palanquin"
              style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Ouvert à tout type de projet. 🚀
            </p>

            <div className="d-flex gap-5">
              <Button variant="primary" className="full-btn nunito-sans">
                Mon CV
              </Button>
              <Button
                variant="outline-primary"
                className="empty-btn nunito-sans"
              >
                Me contacter
              </Button>
            </div>
          </motion.div>
        </Col>

        {/* Image à droite (Apparaît de la droite) */}
        <Col md={6} className="flex-center d-none d-md-flex justify-content-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="image-container align-items-center"
            style={{ marginLeft: "50px" }}
          >
            <img src={me} alt="Avatar" className="avatar-img" />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePart;
