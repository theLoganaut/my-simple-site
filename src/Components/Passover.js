// !MEDIUM WINDOW PREV SETTINGS
import React, { useState } from "react";
import EmailMeModal from "./EmailMeModal";

import {
  Row,
  Col,
  ButtonGroup,
  Button,
  Image,
  Card,
  Toast,
} from "react-bootstrap";

const MediumWindow = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClose = () => setShowEmail(false);
  const handleEmailOpen = () => setShowEmail(true);

  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <div>
      <Row></Row>
      {/* the first row, main */}
      <Row className="outline" style={{ marginTop: "3%" }}>
        {/* col for spacing */}
        <Col style={{ textAlign: "right" }} md={2}></Col>
        <Col>
          {/* up to logan, and buttons */}
          <Row>
            {/* words */}
            <Col>
              <Row>
                <p className="medFontL">Front end focus,</p>
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
                <p className="medFontL">Back end sprinkle,</p>{" "}
              </Row>
              <Row
                style={{
                  textAlign: "right",
                  marginTop: "-5%",
                  marginRight: "1%",
                }}
              >
                <p className="medFontXL"> Logan</p>
              </Row>
            </Col>
            {/* buttons //!make these seperate rows */}
            <Col style={{ textAlign: "center" }}>
              <ButtonGroup vertical style={{}}>
                <Button
                  variant="link"
                  className="medFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="medFontM"> Email Me</div>
                </Button>
                <Button
                  variant="link"
                  className="medFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="medFontM"> Projects</div>
                </Button>
                <Button
                  variant="link"
                  className="medFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="medFontM"> Github</div>
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
              <Row style={{ marginLeft: "-9%" }}>
                <div className="medFontXL">Duncan</div>
              </Row>
              <Row
                style={{
                  marginLeft: "",
                }}
              >
                <div className="medFontM">
                  is here to become a strong member of your dev team
                </div>
              </Row>
            </Col>
          </Row>
        </Col>

        {/* col for spacing */}
        <Col style={{ textAlign: "left" }} md={2}></Col>
        <Row style={{ marginTop: "1%" }}>
          <Col></Col>
          {/* ! first column */}
          <Col style={{ textAlign: "center" }}>
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
                        AWS Cloud Practitioner working on my Solutions
                        Architect.
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
                        ExpressJs and Backend Concepts, like Routing, Auth &
                        Auth, and Data Security.
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
                        Designing aesthetically pleasing user orientated views
                        and reusable APIs for developers.
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
                    textDecoration: "underline overline",
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
                    NFTs(and maybe biotech! I'm a nueralink nerd).
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
                    textDecoration: "underline overline",
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
          <Card
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
          </Card>
          <Button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
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
          </Toast>
        </Row>

        <EmailMeModal
          showEmail={showEmail}
          handleEmailClose={handleEmailClose}
          handleEmailOpen={handleEmailOpen}
        />
      </Row>
    </div>
  );
};

export default MediumWindow;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// !mobile window

import React from "react";

import { Row, Col, ButtonGroup, Button, Image } from "react-bootstrap";

const MobileWindow = () => {
  return (
    <div>
      <Row></Row>
      {/* the first row, main */}
      <Row className="outline" style={{ marginTop: "3%" }}>
        {/* col for spacing */}

        <Col>
          {/* up to logan, and buttons */}
          <Row>
            {/* words */}
            <Col>
              <Row style={{ marginLeft: "10%" }}>
                <p className="mobFontL">Front end</p>
              </Row>
              <Row>
                {" "}
                <div
                  style={{ marginLeft: "-30%", marginTop: "-10%" }}
                  className="mobFontL mobAlignR"
                >
                  focus,
                </div>
              </Row>
              <Row
                style={{
                  textAlign: "right",
                  marginTop: "-2%",
                  overflow: "false",
                  width: "110%",
                }}
              >
                {" "}
                <p className="mobFontL">Back end</p>{" "}
              </Row>
              <Row
                style={{
                  marginLeft: "10%",
                  textAlign: "right",
                  marginTop: "-10%",
                  overflow: "false",
                  width: "110%",
                }}
              >
                {" "}
                <p className="mobFontL">sprinkles,</p>{" "}
              </Row>
              <Row
                style={{
                  textAlign: "right",
                  marginTop: "-5%",
                  marginRight: "-10%",
                }}
              >
                <p className="mobFontXL"> Logan</p>
              </Row>
            </Col>
            {/* buttons //!make these seperate rows */}
            <Col
              style={{
                textAlign: "center",
                marginLeft: "-4%",
                marginTop: "7%",
              }}
            >
              <ButtonGroup vertical style={{}}>
                <Button
                  variant="link"
                  className="mobFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="mobFontM"> Email Me</div>
                </Button>
                <Button
                  variant="link"
                  className="mobFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="mobFontM"> Projects</div>
                </Button>
                <Button
                  variant="link"
                  className="mobFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="mobFontM"> Github</div>
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
                  maxWidth: "90%",
                  height: "auto",
                  justifyContent: "right",
                }}
                src="https://s3.amazonaws.com/myfree.bucket/glassfixoutlinePFP500x500.jpg"
                roundedCircle
              />
            </Col>
            {/* words */}
            <Col style={{ marginTop: "-6%" }}>
              <Row style={{ marginLeft: "-15%" }}>
                <div className="mobFontXL">Duncan</div>
              </Row>
              <Row
                style={{
                  marginTop: "-4%",
                }}
              >
                <div className="mobFontM">
                  is here to become a strong member of your dev team
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ display: "flex", marginTop: "6%" }}>
        <Row>
          <Col>
            <Row style={{ marginLeft: "", marginTop: "30%" }}>
              <div className="mobFontS mobAlignC">Auth</div>
            </Row>
            <Row style={{ marginRight: "-15%" }}>
              <div className="mobFontS mobAlignC">& Auth</div>
            </Row>
          </Col>
          <Col
            style={{ marginLeft: "-8%", marginTop: "3%", marginBottom: "-10%" }}
          >
            <div className="mobFontL mobAlignC"> JavaScript</div>
          </Col>
          <Col
            style={{ marginLeft: "-2%", marginTop: "4%", marginRight: "-2%" }}
          >
            <div className="mobFontL">AWS</div>
          </Col>
          <Col>
            <Row>
              <div className="mobFontS" style={{ marginLeft: "-30%" }}>
                Cloud
              </div>
            </Row>
            <Row>
              <div
                className="mobFontS"
                style={{ marginLeft: "-25%", marginTop: "-5%" }}
              >
                Practitioner
              </div>
            </Row>
            <Row style={{ marginTop: "-10%" }}>
              <div
                className="mobFontS"
                style={{ marginLeft: "-25%", marginTop: "5%" }}
              >
                Solutions
              </div>
            </Row>
            <Row style={{ marginLeft: "-40%", marginTop: "-7%" }}>
              <div className="mobFontS">Architech</div>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "-1.5%" }}>
          <Col>
            <Row style={{ marginRight: "" }}>
              <div className="mobFontS mobAlignC">Enthusiastic</div>
            </Row>
          </Col>
          <Col className="noMargin">
            <div
              className="medmobAlignC"
              style={{ fontSize: "35px", marginTop: "-20%" }}
            >
              React
            </div>
          </Col>
          <Col>
            <div
              className="medmobAlignC mobNoMargin"
              style={{ fontSize: "25px", marginLeft: "2%" }}
            >
              HTML
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col style={{ marginRight: "-10%" }}>
            <div
              className="mobFontL medmobAlignC"
              style={{ marginTop: "-5%", marginLeft: "20%" }}
            >
              Problem
            </div>
          </Col>
          <Col>
            <Row>
              <Col style={{ marginTop: "-2%", marginLeft: "-7%" }}>
                <div className="mobFontM">CSS</div>
              </Col>
              <Col style={{ marginTop: "", marginLeft: "-60%" }}>
                <div className="mobFontS">Fast Learner</div>
              </Col>
            </Row>
            <Row>
              <div className="mobFontM" style={{ marginTop: "-2%" }}>
                ExpressJS
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="mobFontM mobAlignR"
              style={{ marginTop: "-28%", marginRight: "-10%" }}
            >
              Solver
            </div>
          </Col>
          <Col style={{ marginTop: "-4%" }}>
            <div className="mobFontM">Agile</div>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </div>
  );
};

export default MobileWindow;
