import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { GiSoccerKick, GiGolfFlag } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            If you came across this page by accident, I'm sorry.{" "}
            <span className="purple">
              you do not need to stay on this page unless you are in my FCM
              class.{" "}
            </span>{" "}
            Anyways, I have compiled a list of some fallacies that we have
            talked about in class.
            <br></br>
            <p>
              In a world where the <strong>Fallacy of Composition</strong> runs
              rampant, some individuals believe that if each member of a team
              excels in their tasks, the entire team must undoubtedly be
              extraordinary. On the contrary, others succumb to the{" "}
              <strong>Fallacy of Division</strong>, assuming that the brilliance
              of a whole entity extends uniformly to its individual parts — as
              if every cog in a machine inherits the same level of
              sophistication as the machine itself. Meanwhile, the unwary often
              find themselves entangled in the intricate web of the{" "}
              <strong>Texas Sharpshooter Fallacy</strong>, meticulously
              selecting data points that conveniently support their claims
              without considering the broader picture. This tendency is akin to
              an erratic marksman who paints a target around clusters of bullet
              holes after the fact. As discussions unfold, it's not uncommon to
              witness the <strong>Fallacy Fallacy</strong>, where individuals
              hastily dismiss arguments solely because they identify a logical
              fallacy within, oblivious to the possibility that the conclusion
              might still hold merit despite the flawed reasoning.
            </p>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Fallacies do not cease to be fallacies because they become
            fashions."{" "}
          </p>
          <footer className="blockquote-footer">Gilbert K. Chesterton</footer>
          <footer className="blockquote-footer">
            {"(I have no clue who this is.)"}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
