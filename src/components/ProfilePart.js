import { motion } from "framer-motion";
import "../styles/Banner.css";
import "../styles/ProfilePart.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import "../styles/HomePart.css"; // Ajoute les styles CSS
import me from "../assets/images/profile-illustration.png";
import nodejs from "../assets/images/logos/nodejs.png";
import git from "../assets/images/logos/git.png";
import unity from "../assets/images/logos/unity.png";
import angular from "../assets/images/logos/angular.png";
import figma from "../assets/images/logos/figma.png";
import laravel from "../assets/images/logos/laravel.png";
import sass from "../assets/images/logos/sass.png";

function ProfilePart() {
  return (
    <Container style={{ width: "100%", height: "840px" }} id="about">
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
            À propos <br />
            de moi
          </h1>
          <br />
          <p
            className="palanquin"
            style={{ fontWeight: "200", fontSize: "20px" }}
          >
            Avec une expertise en développement front-end et back-end, <br />
            je me concentre sur la création d’expériences utilisateur agréables
            et performantes. J’ai également un fort intérêt pour l’UX/UI Design,
            les applications mobiles, et la conception de jeux vidéo.
            <br />
            <br />
            Curieux et créatif, j’adore apprendre et m’adapter à de nouveaux
            projets et technologies.
          </p>
          <br />

          <Button variant="primary" className="full-btn nunito-sans">
            En savoir plus
          </Button>
        </Col>

        {/* Colonne de droite (Image) */}
        <Col md={6} className="flex-center justify-content-center flex-column">
          <img src={me} alt="Avatar" className="illustration-img" />
          <h5
            className="archivo-narrow z-2 mt-2"
            style={{
              fontWeight: "bold",
              fontSize: "4rem",
            }}
          >
            
            Top Skills
          </h5>
          <div className="logo-part flex-center flex-column gap-5">
            <div className="logo-line-1 flex-center gap-5">
              <img
                src={nodejs}
                alt="Avatar"
                className="avatar-img"
                style={{ width: "100px", height: "auto" }}
              />
              <img
                src={git}
                alt="Avatar"
                className="avatar-img"
                style={{ width: "70px", height: "auto" }}
              />
              <img
                src={unity}
                alt="Avatar"
                className="avatar-img"
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div className="logo-line-2 flex-center gap-5">
              <img
                src={angular}
                alt="Avatar"
                className="avatar-img"
                style={{ width: "auto", height: "86px" }}
              />
              <img
                src={figma}
                alt="Avatar"
                className="avatar-img"
                style={{ width: "auto", height: "86px" }}
              />
              <img
                src={laravel}
                alt="Avatar"
                className="avatar-img"
                style={{ width: "auto", height: "86px" }}
              />
              <img
                src={sass}
                alt="Avatar"
                className="avatar-img"
                style={{ width: "auto", height: "86px" }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePart;
