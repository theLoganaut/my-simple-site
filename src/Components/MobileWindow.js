import React, { useState } from "react";
import EmailMeModal from "./EmailMeModal";
import AboutModal from "./AboutModal";

import {
  Row,
  Col,
  ButtonGroup,
  Button,
  Image,
  Card,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const MediumWindow = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClose = () => setShowEmail(false);
  const handleEmailOpen = () => setShowEmail(true);

  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClose = () => setShowAbout(false);
  const handleAboutOpen = () => setShowAbout(true);

  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

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
                <p className="mobFontL alignC">Front end focus,</p>
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
                <p className="mobFontL">Back end sprinkle,</p>{" "}
              </Row>
              <Row
                style={{
                  fontSize: "50px",
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
                  style={{ fontSize: "18px", padding: ".5rem 2rem" }}
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
                  style={{ fontSize: "18px", padding: ".5rem 2rem" }}
                  onClick={() => window.open("https://github.com/theLoganaut")}
                >
                  Github
                </Button>
                <Button
                  variant="link"
                  style={{ fontSize: "18px", padding: ".5rem 2rem" }}
                  onClick={setShowAbout}
                >
                  About .this
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
                  maxWidth: "70%",
                  height: "auto",
                  justifyContent: "right",
                }}
                src="https://s3.amazonaws.com/myfree.bucket/glassfixoutlinePFP500x500.jpg"
                roundedCircle
              />
            </Col>
            {/* words */}
            <Col style={{ marginTop: "-6%" }}>
              <Row style={{ fontSize: "50px", marginLeft: "-9%" }}>Duncan</Row>
              <Row
                style={{
                  fontSize: "16px",
                  marginTop: "",
                  marginLeft: "5%",
                }}
              >
                is here to become a strong member of your developer team.
              </Row>
            </Col>
          </Row>
        </Col>

        <Col md={3}></Col>
      </Row>
      <Row className="alignC">
        {" "}
        <Col md={3} xs={1}></Col>
        <Col>
          <p
            className="alignC"
            style={{
              fontSize: "20px",
              textDecoration: "underline",
              marginTop: "4%",
            }}
          >
            LEGEND & SKILLSET
          </p>
          <Row style={{ marginBottom: "2%" }}>
            <Col>
              <Card
                style={{
                  background: "rgba(211,211,211, .1)",
                  borderStyle: "hidden",
                }}
              >
                <Card.Img
                  style={{ width: "50%", marginTop: "10%" }}
                  src="/images/myStack.png"
                ></Card.Img>{" "}
              </Card>
            </Col>
            <Col>
              <Card
                border="secondary"
                style={{
                  width: "120%",
                  marginLeft: "-40%",
                  background: "lightgray",
                  top: "10%",
                }}
              >
                <Card.Text>
                  JavaScript, HTML, CSS in a React environment.
                </Card.Text>
              </Card>
            </Col>
          </Row>

          <Row style={{ marginBottom: "2%" }}>
            <Col>
              <Card
                style={{
                  background: "rgba(211,211,211, .1)",
                  borderStyle: "hidden",
                }}
              >
                <Card.Img
                  style={{ width: "50%", marginTop: "10%" }}
                  src="/images/awsStack.png"
                ></Card.Img>{" "}
              </Card>
            </Col>
            <Col>
              <Card
                border="secondary"
                style={{
                  width: "120%",
                  marginLeft: "-40%",
                  background: "lightgray",
                  top: "10%",
                }}
              >
                <Card.Text>
                  AWS Cloud Practitioner working on my Solutions Architect.
                </Card.Text>
              </Card>
            </Col>
          </Row>

          <Row style={{ marginBottom: "2%" }}>
            <Col>
              <Card
                style={{
                  background: "rgba(211,211,211, .1)",
                  borderStyle: "hidden",
                  marginBottom: "2%",
                }}
              >
                <Card.Img
                  style={{ width: "50%", marginTop: "10%" }}
                  src="/images/backendSprinkle.png"
                ></Card.Img>{" "}
              </Card>
            </Col>
            <Col>
              <Card
                border="secondary"
                style={{
                  width: "120%",
                  marginLeft: "-40%",
                  background: "lightgray",
                  top: "10%",
                }}
              >
                <Card.Text>
                  ExpressJs and Backend Concepts, like Routing, Auth & Auth, and
                  Data Security.
                </Card.Text>
              </Card>
            </Col>
          </Row>

          <Row style={{ marginBottom: "2%" }}>
            <Col>
              <Card
                style={{
                  background: "rgba(211,211,211, .1)",
                  borderStyle: "hidden",
                  marginBottom: "2%",
                }}
              >
                <Card.Img
                  style={{ width: "50%", marginTop: "10%" }}
                  src="/images/designInMind.png"
                ></Card.Img>{" "}
              </Card>
            </Col>
            <Col>
              <Card
                border="secondary"
                style={{
                  width: "120%",
                  marginLeft: "-40%",
                  background: "lightgray",
                  top: "10%",
                }}
              >
                <Card.Text>
                  Designing aesthetically pleasing user orientated views and
                  reusable APIs for developers.
                </Card.Text>
              </Card>
            </Col>
          </Row>

          {/* 2nd column */}
          <div>
            <Row>
              <p
                className="alignC"
                style={{
                  fontSize: "20px",
                  textDecoration: "underline",
                  marginTop: "4%",
                }}
              >
                ASPIRATIONS
              </p>

              <Row>
                <div>
                  <Card
                    border="secondary"
                    style={{
                      marginBottom: "2%",
                      backgroundColor: "lightgray",
                    }}
                  >
                    <Card.Text>
                      Grow from a developer only position, to a design and
                      development position.
                    </Card.Text>
                  </Card>{" "}
                </div>
              </Row>
              <Row>
                <div className="alignC">
                  {" "}
                  <Card
                    border="secondary"
                    style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
                  >
                    <Card.Text>
                      Learn Electron and use it to develop GUI-based games to
                      showcase my creativity and skill set better.
                    </Card.Text>
                  </Card>
                </div>
              </Row>
              <Row>
                <div className="alignC">
                  <Card
                    border="secondary"
                    style={{
                      marginBottom: "2%",
                      backgroundColor: "lightgray",
                    }}
                  >
                    <Card.Text>
                      Move on from the current and into the future by developing
                      NFTs(and maybe biotech! I'm a nueralink nerd).
                    </Card.Text>
                  </Card>{" "}
                </div>
              </Row>
              <Row>
                <div className="alignC">
                  {" "}
                  <Card
                    border="secondary"
                    style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
                  >
                    <Card.Text>
                      Learn Java/C# to not only round my knowledge out, but also
                      slowly work on developing the RTS that pulls RTS games
                      back from the dead.
                    </Card.Text>
                  </Card>
                </div>
              </Row>
            </Row>{" "}
          </div>

          {/* 3rd column */}
          <Row>
            <p
              className="alignC"
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                marginTop: "4%",
              }}
            >
              ME, AN OVERVIEW
            </p>
            <Card
              border="secondary"
              style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
            >
              <Card.Text>
                An enthusiastic, confident, tech-loving-20-something looking to
                start a career after finding my passion, creating with code.
              </Card.Text>
            </Card>
          </Row>
          <Row>
            <Card
              border="secondary"
              style={{ marginBottom: "2%", backgroundColor: "lightgray" }}
            >
              <Card.Text>
                Persevering in my efforts to teach myself code taught me a lot,
                not only about code but also things like; Organization,
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
                Coms and Co-op; As big team gamer, I know that communication and
                cooperation are extremely vital to any operation, but especially
                software development.
              </Card.Text>
              <Card.Text className="alignC" style={{ marginTop: "-5%" }}>
                Bad communication = Bad product.
              </Card.Text>
            </Card>
          </Row>
        </Col>
        <Col md={3} xs={1}></Col>
      </Row>
      <Row>
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

export default MediumWindow;
