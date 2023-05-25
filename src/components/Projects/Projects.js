import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tjwlogo from "../../Assets/Photos/tjwlogo.png";
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
import prioryvsluh from "../../Assets/Photos/3723.JPG";
import prioryvlindbergh from "../../Assets/Photos/4223ultimate.JPG";
import prioryvwentzville from "../../Assets/Photos/4223lax.JPG";
import prioryvmicdslax from "../../Assets/Photos/41123lax.JPG";
import prioryvluno from "../../Assets/Photos/41123baseball.JPG";
import prioryvcbc from "../../Assets/Photos/41423.JPG";
import priorygolf from "../../Assets/Photos/42423golf.JPG";
import jhmtm from "../../Assets/Photos/42823jhmtm.JPG";
import fd from "../../Assets/Photos/42823fd.JPG";
import laxsenior from "../../Assets/Photos/42923.JPG";

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
              imgPath={tjwlogo}
              isBlog={true}
              title="| Support my work! |"
              description="If you enjoy my work, you can click the button below to 'buy me a coffee!'"
              ghLink="https://www.buymeacoffee.com/tjwit"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laxsenior}
              isBlog={false}
              title="Priory Lacrosse Senior Game 4/29/23"
              description="| 8-7 Win |"
              ghLink="https://photos.app.goo.gl/EQgcJ4eBjsE1kREp7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fd}
              isBlog={false}
              title="Priory Field Day 4/28/23"
              description="| Photography from field day. |"
              ghLink="https://photos.app.goo.gl/bSX9UDXE1Ppuq1gp6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jhmtm}
              isBlog={false}
              title="Jim Hoots Memorial Track Meet 4/28/23"
              description=""
              ghLink="https://photos.app.goo.gl/qstaqiTAWQaGPPvj6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={priorygolf}
              isBlog={false}
              title="Priory Golf @ Bellerive 4/24/23"
              description="| Players: Ryan Margiotta '23, Luke McLaughlin '24, Owen Farley '24, Eddie Rothery '25, Luke Glarner '25 |"
              ghLink="https://photos.app.goo.gl/hFzAnVoaiLwUowiw7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvcbc}
              isBlog={false}
              title="Priory v. CBC 4/14/2023"
              description="| 8-7 Win (2nd half shutout by Colin Pim '25) |"
              ghLink="https://photos.app.goo.gl/qkSqiKm9jVfzWJdr5"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmicdslax}
              isBlog={false}
              title="Priory v. MICDS 4/11/2023"
              description="| 8-9 OT Loss (only here for 1 Q) |"
              ghLink="https://photos.app.goo.gl/ggeYcpPQQLHxdHor5"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvluno}
              isBlog={false}
              title="Priory v. Lutheran North 4/11/2023"
              description="| I did not get a score update. (Only here for 1 inning) |"
              ghLink="https://photos.app.goo.gl/DqsudyrDF5pxFDRH6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvwentzville}
              isBlog={false}
              title="Priory v. Wentzville 4/2/2023"
              description="| Win - 19 (or 18 idk) - 11 |"
              ghLink="https://photos.app.goo.gl/71464niuaXvaEuj29"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvlindbergh}
              isBlog={false}
              title="Priory v. Lindbergh 4/2/2023"
              description="| Win (thats about all I know about ultimate) |"
              ghLink="https://photos.app.goo.gl/QqWZQuRxvVEtEvuQ6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvsluh}
              isBlog={false}
              title="Priory vs. SLUH 3/7/2023"
              description="| Loss - 13-7 |"
              ghLink="https://photos.app.goo.gl/bzTJ52fTkXa3krWQ9"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={priorybballseniornight}
              isBlog={false}
              title="Priory Basketball Senior Night 2/14/2023"
              description="Thank you seniors for an amazing season! --- Max Lipe | Jacob Willard | Jalen Riad | Gabriel Leung"
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
