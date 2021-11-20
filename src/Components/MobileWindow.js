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
                  marginLeft: "25%",
                  maxWidth: "75%",
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
            <Row style={{ marginLeft: "", marginTop: "20%" }}>
              <div className="mobFontS mobAlignC">Auth</div>
            </Row>
            <Row style={{ marginRight: "-15%" }}>
              <div className="mobFontS mobAlignC">& Auth</div>
            </Row>
          </Col>
          <Col style={{ marginLeft: "-8%", marginTop: "3%" }}>
            <div className="mobFontL mobAlignC"> JavaScript</div>
          </Col>
          <Col style={{ marginLeft: "-2%", marginTop: "4%" }}>
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
          </Col>
        </Row>
        <Row>
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
          <Col>
            <Row>
              <div
                className="mobFontS medmobAlignC"
                style={{ marginLeft: "-15%", marginTop: "-7%" }}
              >
                Architech
              </div>
            </Row>
          </Col>
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
              <Col style={{ marginTop: "-2%", marginLeft: "-10%" }}>
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
              style={{ marginTop: "-30%", marginRight: "-10%" }}
            >
              Solver
            </div>
          </Col>
          <Col style={{ marginTop: "-7%" }}>
            <div className="mobFontM">Agile</div>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </div>
  );
};

export default MobileWindow;
