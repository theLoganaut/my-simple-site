import React from "react";

import { Row, Col, ButtonGroup, Button, Image } from "react-bootstrap";

const SmallWindow = () => {
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
                <p className="smFontL">Front end</p>
              </Row>
              <Row>
                {" "}
                <div
                  style={{ marginLeft: "-30%", marginTop: "-10%" }}
                  className="smFontL mobAlignR"
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
                <p className="smFontL">Back end</p>{" "}
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
                <p className="smFontL">sprinkles,</p>{" "}
              </Row>
              <Row
                style={{
                  textAlign: "right",
                  marginTop: "-5%",
                  marginRight: "-10%",
                }}
              >
                <p className="smFontXL"> Logan</p>
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
                  className="smFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="smFontM"> Email Me</div>
                </Button>
                <Button
                  variant="link"
                  className="smFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="smFontM"> Projects</div>
                </Button>
                <Button
                  variant="link"
                  className="smFontM"
                  style={{ padding: ".5rem 3rem" }}
                >
                  <div className="smFontM"> Github</div>
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
                  maxWidth: "60%",
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
                <div className="smFontXL">Duncan</div>
              </Row>
              <Row
                style={{
                  marginTop: "-4%",
                }}
              >
                <div className="smFontM">
                  is here to become a strong member of your dev team
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ display: "flex", marginTop: "3%" }}>
        <Row>
          <Col>
            <Row style={{ marginLeft: "", marginTop: "20%" }}>
              <div className="smFontS mobAlignC">Auth</div>
            </Row>
            <Row style={{ marginRight: "-15%" }}>
              <div className="smFontS mobAlignC">& Auth</div>
            </Row>
          </Col>
          <Col style={{ marginLeft: "-8%", marginTop: "3%" }}>
            <div className="smFontL mobAlignC"> JavaScript</div>
          </Col>
          <Col style={{ marginLeft: "", marginTop: "4%" }}>
            <div className="smFontL">AWS</div>
          </Col>
          <Col>
            <Row>
              <div className="smFontS" style={{ marginLeft: "-40%" }}>
                Cloud
              </div>
            </Row>
            <Row>
              <div
                className="smFontS"
                style={{ marginLeft: "-35%", marginTop: "-5%" }}
              >
                Practitioner
              </div>
            </Row>
            <Row style={{ marginTop: "-10%" }}>
              <div
                className="smFontS"
                style={{ marginLeft: "-35%", marginTop: "5%" }}
              >
                Solutions
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={{ marginBottom: "2%" }}>
              <div className="smFontS mobAlignC">Enthusiastic</div>
            </Row>
          </Col>
          <Col className="noMargin">
            <div
              className="medmobAlignC"
              style={{ fontSize: "35px", marginTop: "-15%" }}
            >
              React
            </div>
          </Col>
          <Col>
            <div
              className="medmobAlignC mobNoMargin"
              style={{ fontSize: "25px", marginLeft: "2%", marginTop: "-15%" }}
            >
              HTML
            </div>
          </Col>
          <Col>
            <Row>
              <div
                className="smFontS medmobAlignC"
                style={{ marginLeft: "-20%", marginTop: "-7%" }}
              >
                Architech
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginRight: "-10%" }}>
            <div
              className="smFontL medmobAlignC"
              style={{ marginTop: "-4%", marginLeft: "20%" }}
            >
              Problem
            </div>
          </Col>
          <Col>
            <Row style={{ marginTop: "-5%" }}>
              <Col style={{ marginTop: "", marginLeft: "-20%" }}>
                <div className="smFontM">CSS</div>
              </Col>
              <Col style={{ marginTop: "", marginLeft: "-30%" }}>
                <div className="smFontS">Fast Learner</div>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <div
                className="smFontM"
                style={{ marginTop: "-2%", marginLeft: "-15%" }}
              >
                ExpressJS
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="smFontM mobAlignR"
              style={{ marginTop: "-12%", marginRight: "-8%" }}
            >
              Solver
            </div>
          </Col>
          <Col style={{ marginTop: "-1%", marginLeft: "" }}>
            <div className="smFontM">Agile</div>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </div>
  );
};

export default SmallWindow;
