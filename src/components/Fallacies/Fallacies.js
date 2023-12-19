import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./FallaciesCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get To Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          ></Col>
        </Row>
        <h1 className="project-heading">
          Developing A Professional{" "}
          <strong className="purple">Skillset </strong>
        </h1>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
      </Container>
    </Container>
  );
}

export default About;
