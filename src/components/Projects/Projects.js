import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prioryvwebster from "../../Assets/Photos/121222.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvwebster}
              isBlog={false}
              title="Priory v. Webster 12/12/2022"
              description="W 3-1 | Goals: Freddy Gaertner (x3)"
              ghLink="https://photos.app.goo.gl/STwWGa2h1q4mEjCn7"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
