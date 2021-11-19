import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "lightgray",
        height: "100vh",
      }}
    >
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
              <Row style={{ fontSize: "52px" }}>
                <p>Front end focus,</p>
              </Row>
              <Row
                style={{
                  textAlign: "right",
                  fontSize: "52px",
                  marginTop: "-5%",
                }}
              >
                {" "}
                <p>Back end sprinkle,</p>{" "}
              </Row>
              <Row
                style={{
                  fontSize: "70px",
                  textAlign: "Right",
                  marginTop: "-5%",
                  marginRight: "1%",
                }}
              >
                <p> Logan</p>
              </Row>
            </Col>
            {/* buttons //!make these seperate rows */}
            <Col style={{ textAlign: "center" }}>
              <Row>
                {" "}
                <Button size="lg">Email Me</Button>
              </Row>
              <Row>
                {" "}
                <Button>Github</Button>
              </Row>
              <Row>
                {" "}
                <Button>Projects</Button>
              </Row>
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

      {/* 2nd row with my info*/}
      <Row style={{ marginTop: "5%" }}>
        <Col></Col>
        <Col style={{ textAlign: "center" }}>
          Iterative - Iteration is key in programming... so of course I try to
          apply the same concept to build upon nearly every aspect of my life.{" "}
        </Col>
        <Col style={{ textAlign: "center" }}>
          Strong Thinker - Thinking big is valuable in seeing a released
          product, but it hinders progress if the scope isn't aligned. So, I've
          learned to break down projects and tasks to those within the scope of
          a solo developer.
        </Col>
        <Col style={{ textAlign: "center" }}>
          Coms and Co-op - As big team gamer, I know that communication and
          cooperation are extremely vital to any operation, especially software
          development
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
