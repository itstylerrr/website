import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prioryvwebster from "../../Assets/Photos/121222.JPG";
import prioryvladue from "../../Assets/Photos/121522.JPG";
import prioryvbayless from "../../Assets/Photos/122022.JPG";
import prioryveureka from "../../Assets/Photos/123022.JPG";
import prioryvjbs from "../../Assets/Photos/1123.JPG";
import prioryvmicds from "../../Assets/Photos/16231.JPG";
import prioryvclayton1 from "../../Assets/Photos/16232.JPG";
import prioryvclayton2 from "../../Assets/Photos/1923.JPG";
import prioryvdominic from "../../Assets/Photos/12023.JPG";
import prioryvwestminster from "../../Assets/Photos/2723.JPG";
import priorybballseniornight from "../../Assets/Photos/21423.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Pictures </strong>
        </h1>
        <p style={{ color: "white" }}>
          Most recent events, in chronological order.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={priorybballseniornight}
              isBlog={false}
              title="Priory Basketball Senior Night 2/14/2023"
              description="Thank you senior for an amazing season! --- Max Lipe | Jacob Willard | Jalen Riad | Gabriel Leung"
              ghLink="https://photos.app.goo.gl/Q5qF199zh4eNb2PS7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvwestminster}
              isBlog={false}
              title="Priory v. Westminster 2/7/2023"
              description="I waiting a very long time to get these photos done for some reason I have no clue what the result of this game was."
              ghLink="https://photos.app.goo.gl/LdjR883Sucv4F7Lh6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvdominic}
              isBlog={false}
              title="Priory v. St. Dominic 1/9/2023"
              description="Monk Night!"
              ghLink="https://photos.app.goo.gl/NV9gLNUey15GBMke8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvclayton2}
              isBlog={false}
              title="Priory v. Clayton 1/9/2023"
              description="All you need to know is that Don scored!"
              ghLink="https://photos.app.goo.gl/PF8MFQwmMdYMzJYH7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvclayton1}
              isBlog={false}
              title="Priory v. Clayton 1/6/2023"
              description="I forgot the score."
              ghLink="https://photos.app.goo.gl/HWVAj3q5uerqfqtF9"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmicds}
              isBlog={false}
              title="Priory v. MICDS 1/6/2023"
              description="I forgot the score."
              ghLink="https://photos.app.goo.gl/KGK89SNVFdbgkKzB6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvjbs}
              isBlog={false}
              title="Priory v. JBS 1/1/2023"
              description="W 5-3 | Goals: Freddy G. (x2), Max N. (x1), Cole C. (x1), JP N. (x1)"
              ghLink="https://photos.app.goo.gl/8yWb5PowfFpjERj2A"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryveureka}
              isBlog={false}
              title="Priory v. Eureka 12/30/2022"
              description="W 5-3 | Goals: Freddy G. (x2), Gabe K. (x2), Max N. (x1)"
              ghLink="https://photos.app.goo.gl/RkMszLXRquQmdU5z7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvbayless}
              isBlog={false}
              title="Priory v. Bayless 12/20/2022"
              description="W 65-35"
              ghLink="https://photos.app.goo.gl/sXckjnUeKGQZ86bq6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvladue}
              isBlog={false}
              title="Priory v. Ladue 12/15/2022"
              description="T 4-4 | Goals: Henry L. (x1), Noah S. (x1), JP N. (x1), Freddy G. (x1)"
              ghLink="https://photos.app.goo.gl/oysk8CdAdPCND9PY8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvwebster}
              isBlog={false}
              title="Priory v. Webster 12/12/2022"
              description="W 3-1 | Goals: Freddy G. (x3)"
              ghLink="https://photos.app.goo.gl/STwWGa2h1q4mEjCn7"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
