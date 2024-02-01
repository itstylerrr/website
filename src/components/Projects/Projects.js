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
import prioryvsluh from "../../Assets/Photos/3723.jpg";
import prioryvlindbergh from "../../Assets/Photos/4223ultimate.JPG";
import prioryvwentzville from "../../Assets/Photos/4223lax.JPG";
import prioryvmicdslax from "../../Assets/Photos/41123lax.JPG";
import prioryvluno from "../../Assets/Photos/41123baseball.JPG";
import prioryvcbc from "../../Assets/Photos/41423.JPG";
import priorygolf from "../../Assets/Photos/42423golf.JPG";
import jhmtm from "../../Assets/Photos/42823jhmtm.JPG";
import fd from "../../Assets/Photos/42823fd.JPG";
import laxsenior from "../../Assets/Photos/42923.JPG";
import prioryvsdhs from "../../Assets/Photos/090123.jpg";
import prioryvluso from "../../Assets/Photos/9823.jpg";
import prioryvmicds2 from "../../Assets/Photos/91523.jpg";
import prioryvmicds3 from "../../Assets/Photos/91823.jpg";
import prioryvmarquette from "../../Assets/Photos/10723.jpg";
import prioryvlfl from "../../Assets/Photos/102123.jpg";
import prioryvspx from "../../Assets/Photos/102723.jpg";
import prioryveureka2 from "../../Assets/Photos/111023.jpg";
import prioryvclayton3 from "../../Assets/Photos/111323.jpg";
import priorybballjamboree from "../../Assets/Photos/111423.jpg";
import prioryvnorthwest from "../../Assets/Photos/112723.jpg";
import prioryvmarquette2 from "../../Assets/Photos/113023.jpg";
import jbsmeet from "../../Assets/Photos/120123.jpg";
import prioryvmicds4 from "../../Assets/Photos/12123.jpg";
import prioryvjbs2 from "../../Assets/Photos/122223.jpg";
import prioryvsummit from "../../Assets/Photos/122623.jpg";
import prioryvsumner from "../../Assets/Photos/122823.jpg";
import prioryvsdesmet from "../../Assets/Photos/122923.jpg";
import prioryvnorthwest1 from "../../Assets/Photos/11124.jpg";
import priorywrestling1 from "../../Assets/Photos/11824.jpg";
import prioryvmarquette3 from "../../Assets/Photos/11924.jpg";
import prioryvmicds5 from "../../Assets/Photos/12024.jpg";
import prioryvcbc2 from "../../Assets/Photos/12624.jpg";
import cf1 from "../../Assets/Photos/12824.jpg";

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
              imgPath={cf1}
              isBlog={false}
              title="C2 - Chesterfield Falcons 1/28/24"
              description="| Enjoy! |"
              ghLink="https://photos.app.goo.gl/GDUaLfT1Qisun7rZ6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvcbc2}
              isBlog={false}
              title="Priory vs. CBC 1/26/24"
              description="| Final: 4/1 - Goals: Auggie W. x1 |"
              ghLink="https://photos.app.goo.gl/HUL7nhMhU5DTY8KP6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmicds5}
              isBlog={false}
              title="Priory vs. MICDS 1/20/24"
              description="| Final: 4/4 - Goals: Freddy G. x3 * Wes H. x1 |"
              ghLink="https://photos.app.goo.gl/Jx7CjievordPJrQj7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmarquette3}
              isBlog={false}
              title="Priory vs. Marquette 1/19/24"
              description="| Final: 1/8 - Goals: Gabe K x1 |"
              ghLink="https://photos.app.goo.gl/rvXKfkCb4ExygVJRA"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={priorywrestling1}
              isBlog={false}
              title="Priory Wrestling 1/18/24"
              description="| Still don't know anything about wrestling, but the birds won both of their matches! |"
              ghLink="https://photos.app.goo.gl/tj2xJGipscsvUkU67"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvnorthwest1}
              isBlog={false}
              title="Priory vs. Northwest 1/11/24"
              description="| Ravens Win: 5-1 - Goals: Gabe K. x2 * Cole C. x1 * Wynn O. x1 * Max N. x1 |"
              ghLink="https://photos.app.goo.gl/21F1rBsPYJcfsfWh9"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvsdesmet}
              isBlog={false}
              title="Priory vs. DeSmet 12/29/23"
              description="| Ravens fall to DeSmet. |"
              ghLink="https://photos.app.goo.gl/rRscGLUXbbsTxeXk8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvsumner}
              isBlog={false}
              title="Priory vs. Sumner 12/28/23"
              description="| RAVENS WIN - 58-20 |"
              ghLink="https://photos.app.goo.gl/W8vzeNYV4oWgVhJa7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvsummit}
              isBlog={false}
              title="Priory vs. Summit 12/26/23"
              description="| Overtime loss - 31-36 |"
              ghLink="https://photos.app.goo.gl/pnSNVtudTvHUk6ss9"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvjbs2}
              isBlog={false}
              title="Priory vs. JBS 12/22/23"
              description="| Goals: Freddy G. * Gabe K. x1 |"
              ghLink="https://photos.app.goo.gl/ofR4T9ZpCBBFUNBw8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmicds4}
              isBlog={false}
              title="Priory vs. MICDS 12/01/23"
              description="| Goals: Cole C. x1 * Gabe K. x1 * Max N. x1 |"
              ghLink="https://photos.app.goo.gl/bPRjipnJn5JdQQjT6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jbsmeet}
              isBlog={false}
              title="Priory @ JBS Tournament 12/01/23"
              description="| I don't know how wrestling works, if you know the score let me know and I'll put it here. |"
              ghLink="https://photos.app.goo.gl/BueBjhbLi5GiutMm8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmarquette2}
              isBlog={false}
              title="Priory vs. Marquette 11/30/23"
              description="| Overtime Loss: 66-71 |"
              ghLink="https://photos.app.goo.gl/eSWJGnKPdbB3zgWd8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvnorthwest}
              isBlog={false}
              title="Priory vs. Northwest 11/27/23"
              description="| Goals: Freddy G. x2 * Cameron R. x1 * J.P. N. x1 * Jake W. x1 |"
              ghLink="https://photos.app.goo.gl/Ad8vKLyguNs1GdT37"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={priorybballjamboree}
              isBlog={false}
              title="Priory Basketball Jamboree 11/14/23"
              description="| Great look at the team for this year, won both the games! |"
              ghLink="https://photos.app.goo.gl/oPBStSASwNRc7ecY6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvclayton3}
              isBlog={false}
              title="Priory vs. Clayton 11/13/23"
              description="| Goals: Freddy G. x1 * Jack L x1 |"
              ghLink="https://photos.app.goo.gl/ZJAG6MS3dyfEYKtK7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryveureka2}
              isBlog={false}
              title="Priory vs. Eureka 11/10/23"
              description="| Goals: Grant M. x2 * Cameron R. x1 * Wes Harvey x1 |"
              ghLink="https://photos.app.goo.gl/KbyKzHGuRZzr9Ph97"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvspx}
              isBlog={false}
              title="Priory @ St. Pius X 10/27/23"
              description="| Great season Ravens! |"
              ghLink="https://photos.app.goo.gl/hK1h87PcqQnA2afS8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvlfl}
              isBlog={false}
              title="Priory Football Senior Night 10/21/23"
              description="| Priory Football Senior Night! Game photos may not be up to standard as I may have gotten a filter that I didn't want to use stuck on my lense... But senior+parent photos were with a different lense so they should be good! |"
              ghLink="https://photos.app.goo.gl/asVHW22Ypf53qx6e7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmarquette}
              isBlog={false}
              title="Priory Football Homecoming Game 10/7/23"
              description="| Ravens win 21-0! - Great work by the football team to lead to a great night at homecoming! |"
              ghLink="https://photos.app.goo.gl/aeo1xoxC4LioNV8J6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmicds3}
              isBlog={false}
              title="Priory (7th Grade) vs. MICDS 9/18/23"
              description="| Ravens win 24-22! - Great first FLEX football game by the 7th graders! |"
              ghLink="https://photos.app.goo.gl/S1UZhgr5T3pvojer9"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvmicds2}
              isBlog={false}
              title="Priory vs. MICDS 9/15/23"
              description="| Ravens defeated 10-41 - Rough game for the Ravens. |"
              ghLink="https://photos.app.goo.gl/PhdxdxjcytTRfYWd7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvluso}
              isBlog={false}
              title="Priory vs. LUSO 9/08/23"
              description="| Ravens win 36-20! - Worked with low lighting conditions again, however spent alot of time editing and I think this turned out really well for the conditions. |"
              ghLink="https://photos.app.goo.gl/rWMhkJu7NemddHLx9"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioryvsdhs}
              isBlog={false}
              title="Priory vs. St. Dominic 9/01/23"
              description="| Rough lighting conditions, only got a few and was only able to keep very few. |"
              ghLink="https://photos.app.goo.gl/Z8GYCfk1o2LRkMUh9"
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
