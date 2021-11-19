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
import { useEffect, useState } from "react";

import { useWindowDimension } from "./Components/useWindowDimension";
import LargeWindow from "./Components/LargeWindow";

function App() {
  const [width, height] = useWindowDimension();

  const [screenSizeSetting, setScreenSizeSetting] = useState(false);

  useEffect(() => {
    if (width >= 1653) {
      setScreenSizeSetting(true);
      console.log("large");
    } else if (width >= 1170) {
      setScreenSizeSetting(false);
      console.log("med screen");
    } else if (width >= 2112) {
      console.log("widescreen?");
    } else if (width <= 992) {
      console.log("mobile");
    }
  }, [width, height]);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "lightgray",
        height: "100%",
      }}
    >
      {/* 3 sizes of comps, med, larg, mobile */}
      {screenSizeSetting ? <LargeWindow /> : <></>}

      {/* 2nd row with my info*/}
      {/* <Row style={{ marginTop: "5%" }}>
        <Col></Col>
        <Col style={{ textAlign: "center" }}>
          <Row style={{ textAlign: "center" }}>
            <p>ASPIRATIONS</p>
            <Col style={{ fontSize: "32px", marginLeft: "" }}> NFTs</Col>
            <Col style={{ marginLeft: "-20%" }}>
              {" "}
              design and develop a functional and scalable webapp game that
              takes advantage of blockchain technologies.
            </Col>
          </Row> */}

      {/* <p>
            {" "}
            <span style={{ fontSize: "32px" }}>NFTs</span>- design and develop a
            functional and scalable webapp game that takes advantage of
            blockchain technologies.{" "}
          </p>{" "} */}
      {/*  Iterative - Iteration is key in programming... so of course I try to
          apply the same concept to build upon nearly every aspect of my life.{" "} */}
      {/* </Col>
        <Col style={{ textAlign: "center" }}>
          <Row></Row>
          Strong Thinker - Thinking big is valuable in seeing a released
          product, but it hinders progress if the scope isn't aligned. So, I've
          learned to break down projects and tasks to those within the scope of
          a solo developer.
        </Col>

        <Col style={{ textAlign: "center" }}>
          <Row></Row>
          Coms and Co-op - As big team gamer, I know that communication and
          cooperation are extremely vital to any operation, especially software
          development
        </Col>
        <Col></Col>
      </Row> */}
    </Container>
  );
}

export default App;
