import "../styles/Banner.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Banner() {
  return (
    <Container fluid>
      <Row className="banner">
        <Col
          sm={2}
          className="text-center d-flex align-items-center justify-content-center"
        >
          <h5>
            <a href="./" className="palanquin link">
              AWACORP
            </a>
          </h5>
        </Col>
        <Col sm={8}></Col>
        <Col
          sm={2}
          className="text-center d-flex align-items-center justify-content-center"
        >
          
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
