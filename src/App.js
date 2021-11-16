import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  InputGroup,
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
        <Col style={{ textAlign: "right" }} md={3}>
          edge
        </Col>

        <Col>
          {/* up to logan, and buttons */}
          <Row>
            {/* words */}
            <Col>
              <Row style={{ fontSize: "52px" }}>Front end focus,</Row>
              <Row style={{ fontSize: "52px" }}>Back end sprinkle,</Row>
              <Row style={{ fontSize: "64px", textAlign: "Right" }}>
                <p> Logan</p>
              </Row>
            </Col>
            {/* buttons */}
            <Col style={{ textAlign: "center" }}>
              <ButtonGroup size="lg" vertical>
                <Button large>Email Me</Button>
                <Button>Github</Button>
                <Button>Projects</Button>
              </ButtonGroup>
            </Col>
          </Row>
          {/* duncan and below with PFP */}
          <Row>
            {/* PFP */}
            <Col>
              <text>PFP</text>{" "}
            </Col>
            {/* words */}
            <Col>
              <Row style={{ fontSize: "64px" }}>Duncan</Row>
              <Row style={{ fontSize: "32px" }}>
                is ready to grow into a strong member of your dev team
              </Row>
            </Col>
          </Row>
        </Col>

        {/* col for spacing */}
        <Col style={{ textAlign: "left" }} md={3}>
          edge
        </Col>
      </Row>

      {/* 2nd row with my info*/}
      <Row>
        <Col style={{ textAlign: "center" }}>1 of 3</Col>
        <Col style={{ textAlign: "center" }}>2 of 3</Col>
        <Col style={{ textAlign: "center" }}>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
