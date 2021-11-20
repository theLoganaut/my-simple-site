import React from "react";

import { Row, Col, ButtonGroup, Button, Image } from "react-bootstrap";

const MediumWindow = () => {
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
      </Row>

      <Row style={{ display: "flex", marginTop: "2%" }}>
        <Row>
          <Col></Col>
          <Col>
            <Row style={{ marginRight: "-20%" }}>
              <div className="medFontS alignR">Auth</div>
            </Row>
            <Row style={{ marginRight: "-20%" }}>
              <div className="medFontS alignR">& Auth</div>
            </Row>
          </Col>
          <Col>
            <div className="medFontL alignC"> JavaScript</div>
          </Col>
          <Col style={{ marginLeft: "-1.5%" }}>
            <div className="medFontL">AWS</div>
          </Col>
          <Col>
            <Row>
              <div className="medFontS" style={{ marginLeft: "-50%" }}>
                Cloud Practitioner
              </div>
            </Row>
            <Row>
              <div className="medFontS" style={{ marginLeft: "-45%" }}>
                Solutions
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Row style={{ marginRight: "-12%" }}>
              <div className="medFontS alignR">Enthusiastic</div>
            </Row>
          </Col>
          <Col className="noMargin">
            <div className="medAlignC medNoMargin" style={{ fontSize: "40px" }}>
              React
            </div>
          </Col>
          <Col className="noMargin">
            <div
              className="medAlignC medNoMargin"
              style={{ fontSize: "30px", marginLeft: "-15%" }}
            >
              HTML
            </div>
          </Col>
          <Col>
            <Row>
              <div
                className="medFontS medAlignC"
                style={{ marginLeft: "-15%", marginTop: "-7%" }}
              >
                Architech
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="medFontL medAlignR">Problem</div>
          </Col>
          <Col>
            <Row>
              <Col style={{ marginTop: "-2%" }}>
                <div className="medFontM medAlignC">CSS</div>
              </Col>
              <Col style={{ marginTop: "-8%", marginLeft: "2%" }}>
                <div className="medFontS">Fast</div>
              </Col>
              <Col>
                {" "}
                <div className="medFontS" style={{ marginLeft: "-65%" }}>
                  Learner
                </div>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <div className="medFontM" style={{ marginTop: "-4%" }}>
                ExpressJS
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="medFontM medAlignR" style={{ marginTop: "-6%" }}>
              Solver
            </div>
          </Col>
          <Col>
            <div className="medFontM">Agile</div>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </div>
  );
};

export default MediumWindow;
