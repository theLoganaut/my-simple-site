import React from "react";

import { Row, Col, ButtonGroup, Button, Image } from "react-bootstrap";

const LargeWindow = () => {
  return (
    <div>
      <Row style={{ marginBottom: "50px" }}></Row>
      {/* the first row, main */}
      <Row className="outline" style={{ marginTop: "50px" }}>
        {/* col for spacing */}
        <Col style={{ textAlign: "right" }} md={3}></Col>

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
                >
                  Email Me
                </Button>
                <Button
                  variant="link"
                  style={{ fontSize: "28px", padding: ".5rem 3rem" }}
                >
                  Projects
                </Button>
                <Button
                  variant="link"
                  style={{ fontSize: "28px", padding: ".5rem 3rem" }}
                >
                  Github
                </Button>
              </ButtonGroup>
              {/* <Row>
                {" "}
                <div>
                  <Button size="lg" style={{ padding: "15px 32px" }}>
                    Email Me
                  </Button>
                </div>
              </Row>
              <Row>
                <div>
                  <Button style={{ padding: "15px 32px" }}>Github</Button>
                </div>{" "}
              </Row>
              <Row>
                {" "}
                <div>
                  {" "}
                  <Button style={{ padding: "15px 32px" }}>Projects</Button>
                </div>
              </Row> */}
              {/* <ButtonGroup size="lg" vertical>
                <Button style={{ marginBottom: "5%" }} size="lg">
                  Email Me
                </Button>
                <Button>Github</Button>
                <Button>Projects</Button>
              </ButtonGroup> */}
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

      <Row style={{ display: "flex", marginTop: "2%" }}>
        <Row>
          <Col></Col>
          <Col>
            <Row style={{ marginRight: "-20%" }}>
              <div className="fontS alignR">Auth</div>
            </Row>
            <Row style={{ marginRight: "-20%" }}>
              <div className="fontS alignR">& Auth</div>
            </Row>
          </Col>
          <Col>
            <div className="fontL alignC"> JavaScript</div>
          </Col>
          <Col style={{ marginLeft: "-2%" }}>
            <div className="fontL">AWS</div>
          </Col>
          <Col>
            <Row>
              <div className="fontS" style={{ marginLeft: "-60%" }}>
                Cloud Practitioner
              </div>
            </Row>
            <Row>
              <div className="fontS" style={{ marginLeft: "-60%" }}>
                Solutions
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Row>
              <div className="fontS alignR">Enthusiastic</div>
            </Row>
          </Col>
          <Col className="noMargin">
            <div className="alignC noMargin" style={{ fontSize: "56px" }}>
              React
            </div>
          </Col>
          <Col className="noMargin">
            <div className="alignC noMargin" style={{ fontSize: "48px" }}>
              HTML
            </div>
          </Col>
          <Col>
            <Row>
              <div className="fontS alignC" style={{ marginLeft: "-35%" }}>
                Architech
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="fontL alignR">Problem Solver</div>
            <Row>
              <div className="fontM alignR">Agile</div>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col style={{ marginTop: "-4%" }}>
                <div className="fontM alignC">CSS</div>
              </Col>
              <Col style={{ marginTop: "-2%", marginLeft: "2%" }}>
                <div className="fontS">Fast</div>
              </Col>
              <Col>
                {" "}
                <div className="fontS" style={{ marginLeft: "-35%" }}>
                  Learner
                </div>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <div className="fontM" style={{ marginTop: "-4%" }}>
                ExpressJS
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </div>
  );
};

export default LargeWindow;
