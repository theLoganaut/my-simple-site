import React, { useState } from "react";
import EmailMeModal from "./EmailMeModal";

import { Row, Col, ButtonGroup, Button, Image, Card } from "react-bootstrap";

const LargeWindow = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClose = () => setShowEmail(false);
  const handleEmailOpen = () => setShowEmail(true);

  return (
    <div>
      <Row style={{ marginBottom: "50px" }}></Row>
      {/* the first row, main */}
      <Row className="outline" style={{ marginTop: "50px" }}>
        {/* col for spacing */}
        <Col style={{ textAlign: "right" }} md={3}>
          {" "}
        </Col>

        <Col>
          {/* up to logan, and buttons */}
          <Row>
            {/* words */}
            <Col>
              <Row>
                <p className="fontL">Front end focus,</p>
              </Row>
              <Row
                style={{
                  textAlign: "right",
                  marginTop: "-5%",
                  overflow: "false",
                  width: "120%",
                }}
              >
                {" "}
                <p className="fontL">Back end sprinkle,</p>{" "}
              </Row>
              <Row
                style={{
                  fontSize: "70px",
                  textAlign: "right",
                  marginTop: "-5%",
                  marginRight: "1%",
                }}
              >
                <p> Logan</p>
              </Row>
            </Col>
            {/* buttons //!make these seperate rows */}
            <Col style={{ textAlign: "center" }}>
              <ButtonGroup vertical style={{}}>
                <Button
                  variant="link"
                  style={{ fontSize: "28px", padding: ".5rem 3rem" }}
                  onClick={setShowEmail}
                >
                  Email Me
                </Button>
                {/* <Button
                  variant="link"
                  style={{ fontSize: "28px", padding: ".5rem 3rem" }}
                >
                  Projects
                </Button> */}
                <Button
                  variant="link"
                  style={{ fontSize: "28px", padding: ".5rem 3rem" }}
                  onClick={() => window.open("https://github.com/theLoganaut")}
                >
                  Github
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          {/* duncan and below with PFP */}
          <Row>
            {/* PFP */}
            <Col>
              <Image
                style={{
                  marginTop: "-5%",
                  display: "block",
                  marginLeft: "auto",
                  maxWidth: "50%",
                  height: "auto",
                  justifyContent: "right",
                }}
                src="https://s3.amazonaws.com/myfree.bucket/glassfixoutlinePFP500x500.jpg"
                roundedCircle
              />
            </Col>
            {/* words */}
            <Col style={{ marginTop: "-6%" }}>
              <Row style={{ fontSize: "70px", marginLeft: "-9%" }}>Duncan</Row>
              <Row
                style={{
                  fontSize: "32px",
                  marginTop: "",
                  marginLeft: "5%",
                }}
              >
                is here to become a strong member of your dev team
              </Row>
            </Col>
          </Row>
        </Col>

        {/* col for spacing */}
        <Col style={{ textAlign: "left" }} md={3}></Col>
      </Row>

      {/* 2nd row with my info*/}
      <Row style={{ marginTop: "1%" }}>
        <Col></Col>
        {/* ! first column */}
        <Col style={{ textAlign: "center", background: "lightgray" }}>
          <Row style={{ textAlign: "center" }}>
            <Row>
              <p
                style={{
                  fontSize: "24px",
                  textDecoration: "underline overline",
                }}
              >
                LEGEND & SKILLSET
              </p>
              <Col style={{ fontSize: "32px", marginLeft: "" }}> ICONS</Col>
              <Col style={{ marginLeft: "-20%", marginBottom: "2%" }}>
                JavaScript, HTML, CSS in a React or Vue environment.
              </Col>
            </Row>
            <Row>
              <Col style={{ fontSize: "32px", marginLeft: "" }}> ICONS</Col>
              <Col style={{ marginLeft: "-20%", marginBottom: "2%" }}>
                {" "}
                AWS Cloud Practicioner working on my Solutions Architect.
              </Col>
            </Row>
            <Row>
              <Col style={{ fontSize: "32px", marginLeft: "" }}> ICONS</Col>
              <Col style={{ marginLeft: "-20%", marginBottom: "2%" }}>
                {" "}
                ExpressJs and Backend Concepts, like Routing, Auth & Auth, and
                Data Security.
              </Col>
            </Row>
            <Row>
              <Col style={{ fontSize: "32px", marginLeft: "" }}> ICONS</Col>
              <Col style={{ marginLeft: "-20%", marginBottom: "2%" }}>
                {" "}
                Designing aesthetically pleasing user orientated views and
                reusable APIs for developers.
              </Col>
            </Row>
          </Row>
        </Col>
        {/* ! 2nd column */}
        <Col style={{ textAlign: "center" }}>
          <Row style={{ textAlign: "center" }}>
            <Row>
              <p
                style={{
                  fontSize: "24px",
                  textDecoration: "underline overline",
                }}
              >
                ASPIRATIONS
              </p>
              {/* <Col style={{ fontSize: "32px", marginLeft: "" }}> ICONS</Col> */}
              <Card style={{ marginBottom: "2%" }}>
                <Card.Text>
                  Grow from a developer only position, to a design and
                  development position.
                </Card.Text>
              </Card>
              {/* <Col style={{ marginBottom: "2%" }}>
                {" "}
                Grow from a developer only position, to a design and development
                position.
              </Col> */}
            </Row>
            <Row>
              <Card style={{ marginBottom: "2%" }}>
                <Card.Text>
                  Learn Electron and use it to develop GUI-based games to
                  showcase my creativity and skill set better.
                </Card.Text>
              </Card>
              {/* <Col style={{ marginBottom: "2%" }}>
                {" "}
                Learn Electron and use it to develop GUI-based games to showcase
                my creativity and skill set better.
              </Col> */}
            </Row>
            <Row>
              <Card style={{ marginBottom: "2%" }}>
                <Card.Text>
                  Move on from the current and into the future by developing
                  NFTs(and maybe biotech! I'm a nueralink nerd).
                </Card.Text>
              </Card>
              {/* <Col style={{ marginBottom: "2%" }}>
                {" "}
                Move on from the current and into the future by developing
                NFTs(and maybe biotech! I'm a nueralink nerd).
              </Col> */}
            </Row>
            <Row>
              {/* <Col style={{ marginBottom: "2%" }}>
                {" "}
                Learn Java/C# to not only round my knowledge out, but also
                slowly work on developing the RTS that pulls RTS games back from
                the dead.
              </Col> */}
              <Card style={{ marginBottom: "2%" }}>
                <Card.Text>
                  Learn Java/C# to not only round my knowledge out, but also
                  slowly work on developing the RTS that pulls RTS games back
                  from the dead.
                </Card.Text>
              </Card>
            </Row>
          </Row>
        </Col>

        <Col style={{ textAlign: "center", background: "lightgray" }}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "24px",
                  textDecoration: "underline overline",
                }}
              >
                ME, AN OVERVIEW
              </Card.Title>
              <Card.Text>
                An enthusiastic, confident, tech-loving-20-something looking to
                start a career after finding my passion, creating with code.
              </Card.Text>
              <Card.Text>
                Persevering in my efforts to teach myself code taught me a lot,
                not only about code but also things like; Organization,
                Iterations, Workflow, GoogleFu, Versioning, Redundancy,
                Security, and so much more.
              </Card.Text>
              <Card.Text>
                My Coms and Co-op; As big team gamer, I know that communication
                and cooperation are extremely vital to any operation, but
                especially software development.
              </Card.Text>
              <Card.Text style={{ marginTop: "-5%" }}>
                Bad communication = Bad product.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <Row style={{ textAlign: "center" }}>
            <Row>
              <p
                style={{
                  fontSize: "24px",
                  textDecoration: "underline overline",
                }}
              >
                ME, AN OVERVIEW
              </p>
              <Col style={{ marginBottom: "2%" }}>
                {" "}
                An enthusiastic, confident, tech-loving-20-something looking to
                start a career after finding my passion, creating with code.
              </Col>
            </Row>
            <Row>
              <Col style={{ marginBottom: "2%" }}>
                {" "}
                Persevering in my efforts to teach myself code taught me a lot,
                not only about code but also things like; Organization,
                Iterations, Workflow, GoogleFu, Versioning, Redundancy,
                Security, and so much more.
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                My Coms and Co-op; As big team gamer, I know that communication
                and cooperation are extremely vital to any operation, but
                especially software development.
              </Col>
              <p style={{ marginBottom: "2%" }}>
                {" "}
                Bad communication = Bad product.
              </p>
            </Row>
          </Row> */}
        </Col>
        <Col></Col>
      </Row>

      <EmailMeModal
        showEmail={showEmail}
        handleEmailClose={handleEmailClose}
        handleEmailOpen={handleEmailOpen}
      />
    </div>
  );
};

export default LargeWindow;
