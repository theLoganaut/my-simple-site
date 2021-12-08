import React, { useState } from "react";
import EmailMeModal from "./EmailMeModal";
import AboutModal from "./AboutModal";

import { Row, Col, ButtonGroup, Button, Image, Card } from "react-bootstrap";

const LargeWindow = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClose = () => setShowEmail(false);
  const handleEmailOpen = () => setShowEmail(true);

  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClose = () => setShowAbout(false);
  const handleAboutOpen = () => setShowAbout(true);

  return (
    <div>
      {/* the first row, main */}
      <Row className="outline" style={{ marginTop: "1%" }}>
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
                <Button
                  variant="link"
                  style={{ fontSize: "28px", padding: ".5rem 3rem" }}
                  onClick={setShowAbout}
                >
                  About.this()
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
                is here to become a strong member of your software team.
              </Row>
            </Col>
          </Row>
        </Col>

        <Col style={{ textAlign: "left" }} md={3}>
          {" "}
          {/*scrapping this idea for now <Button
            onClick={toggleShowA}
            size="sm"
            style={{ backgroundColor: "lightgray", borderColor: "black" }}
          >
            <p style={{ fontSize: "42px" }}> &darr; </p>
          </Button>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast> */}
        </Col>
      </Row>

      {/* 2nd row with my info*/}
      <Row style={{ marginTop: "1%" }}>
        <Col></Col>
        {/* ! first column */}
        <Col style={{ textAlign: "center" }}>
          <Row style={{ textAlign: "center" }}>
            <Row>
              <p
                style={{
                  fontSize: "24px",
                  textDecoration: "underline",
                }}
              >
                LEGEND & SKILLSET
              </p>

              <Row style={{ marginBottom: "5%" }}>
                <Col style={{ marginRight: "-50%" }}>
                  <Card
                    style={{
                      width: "30%",
                      background: "lightgray",
                      borderStyle: "hidden",
                    }}
                  >
                    <Card.Img src="/images/myStack.png" />
                  </Card>
                </Col>

                <Col>
                  <Card
                    border="secondary"
                    style={{ width: "120%", background: "lightgray" }}
                  >
                    <Card.Text>
                      JavaScript, HTML, CSS in a React environment.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5%" }}>
                <Col style={{ marginRight: "-50%" }}>
                  <Card
                    style={{
                      width: "30%",
                      background: "lightgray",
                      borderStyle: "hidden",
                    }}
                  >
                    <Card.Img src="/images/awsStack.png" />
                  </Card>
                </Col>

                <Col>
                  <Card
                    border="secondary"
                    style={{ width: "120%", background: "lightgray" }}
                  >
                    <Card.Text>
                      AWS Cloud Practitioner working on my Solutions Architect.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5%" }}>
                <Col style={{ marginRight: "-50%" }}>
                  <Card
                    style={{
                      width: "30%",
                      background: "lightgray",
                      borderStyle: "hidden",
                    }}
                  >
                    <Card.Img src="/images/backendSprinkle.png" />
                  </Card>
                </Col>

                <Col>
                  <Card
                    border="secondary"
                    style={{ width: "120%", background: "lightgray" }}
                  >
                    <Card.Text>
                      ExpressJs and Backend Concepts, like Routing, Auth & Auth,
                      and Data Security.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>

              <Row style={{ marginBottom: "5%" }}>
                <Col style={{ marginRight: "-50%" }}>
                  <Card
                    style={{
                      width: "30%",
                      background: "lightgray",
                      borderStyle: "hidden",
                    }}
                  >
                    <Card.Img src="/images/designInMind.png" />
                  </Card>
                </Col>

                <Col>
                  <Card
                    border="secondary"
                    style={{ width: "120%", background: "lightgray" }}
                  >
                    <Card.Text>
                      Designing aesthetically pleasing user orientated views and
                      reusable APIs for developers.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
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
                  textDecoration: "underline",
                }}
              >
                ASPIRATIONS
              </p>
              {/* <Col style={{ fontSize: "32px", marginLeft: "" }}> ICONS</Col> */}
              <Card
                border="secondary"
                style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
              >
                <Card.Text>
                  Grow from a developer only position, to a design and
                  development position.
                </Card.Text>
              </Card>
            </Row>
            <Row>
              <Card
                border="secondary"
                style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
              >
                <Card.Text>
                  Learn Electron and use it to develop GUI-based games to
                  showcase my creativity and skill set better.
                </Card.Text>
              </Card>
            </Row>
            <Row>
              <Card
                border="secondary"
                style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
              >
                <Card.Text>
                  Move on from the current and into the future by developing
                  NFTs (and maybe biotech! I'm a neuralink nerd).
                </Card.Text>
              </Card>
            </Row>
            <Row>
              <Card
                border="secondary"
                style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
              >
                <Card.Text>
                  Learn Java/C# to not only round my knowledge out, but also
                  slowly work on developing the RTS that pulls RTS games back
                  from the dead.
                </Card.Text>
              </Card>
            </Row>
          </Row>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <Row style={{ textAlign: "center" }}>
            <Row>
              <p
                style={{
                  fontSize: "24px",
                  textDecoration: "underline",
                }}
              >
                ME, AN OVERVIEW
              </p>
              <Card
                border="secondary"
                style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
              >
                <Card.Text>
                  An enthusiastic, confident, tech-loving-20-something looking
                  to start a career after finding my passion, creating with
                  code.
                </Card.Text>
              </Card>
            </Row>
            <Row>
              <Card
                border="secondary"
                style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
              >
                <Card.Text>
                  Persevering in my efforts to teach myself code taught me a
                  lot, not only about code but also things like; Organization,
                  Iteratitive Orientation, Workflow, GoogleFu, Versioning,
                  Redundancy, Security, and so much more.
                </Card.Text>
              </Card>
            </Row>
            <Row>
              <Card
                border="secondary"
                style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
              >
                <Card.Text>
                  Coms and Co-op; As big team gamer, I know that communication
                  and cooperation are extremely vital to any operation, but
                  especially software development.
                </Card.Text>
                <Card.Text style={{ marginTop: "-5%" }}>
                  Bad communication = Bad product.
                </Card.Text>
              </Card>
            </Row>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {/* <Card
          border="secondary"
          style={{
            position: "fixed",
            bottom: "1%",
            left: "90%",
            backgroundColor: "lightgray",
            overflow: "visible",
            maxWidth: "10em",
          }}
        >
          <Card.Text style={{ marginBottom: "-1%" }}>
            - React as the framework.
          </Card.Text>
          <Card.Text style={{ marginBottom: "-1%" }}>
            - tsParticles for the falling effect.
          </Card.Text>
          <Card.Text style={{ marginBottom: "-1%" }}>
            - All images made by me.
          </Card.Text>
          <Card.Text style={{ marginBottom: "-`1%" }}>
            Please hire me.
          </Card.Text>
        </Card> */}
        <div
          style={{
            position: "fixed",
            top: "5%",
            left: "95%",
            overflow: "visible",
            maxWidth: "10em",
          }}
        ></div>
      </Row>

      <EmailMeModal
        showEmail={showEmail}
        handleEmailClose={handleEmailClose}
        handleEmailOpen={handleEmailOpen}
      />
      <AboutModal
        showAbout={showAbout}
        handleAboutClose={handleAboutClose}
        handleAboutOpen={handleAboutOpen}
      />
    </div>
  );
};

export default LargeWindow;
