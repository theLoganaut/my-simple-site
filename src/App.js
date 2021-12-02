import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import { useWindowDimension } from "./Components/useWindowDimension";
import LargeWindow from "./Components/LargeWindow";
import MediumWindow from "./Components/MediumWindow";
import MobileWindow from "./Components/MobileWindow";
import SmallWindow from "./Components/SmallWindow";
import ThinWindow from "./Components/ThinWindow";
import Particles from "react-tsparticles";
import snowingSettings from "./particleConfigs/snowing";

function App() {
  const [width, height] = useWindowDimension();

  const [screenSizeLarge, setScreenSizeLarge] = useState(false);
  const [screenSizeMedium, setScreenSizeMedium] = useState(false);
  const [screenSizeMobile, setScreenSizeMobile] = useState(false);
  const [screenSizeSmall, setScreenSizeSmall] = useState(false);
  const [screenSizeThin, setScreenSizeThin] = useState(false);

  useEffect(() => {
    console.log(height, width);
    if (width >= 1589) {
      setScreenSizeMedium(false);
      setScreenSizeLarge(true);
      setScreenSizeMobile(false);
      setScreenSizeSmall(false);
      setScreenSizeThin(false);
      console.log("large");
    } else if (width >= 1043) {
      setScreenSizeMedium(true);
      setScreenSizeLarge(false);
      setScreenSizeMobile(false);
      setScreenSizeSmall(false);
      setScreenSizeThin(false);
      console.log("med screen");
    } else if (width >= 615) {
      setScreenSizeMedium(false);
      setScreenSizeLarge(false);
      setScreenSizeMobile(false);
      setScreenSizeSmall(true);
      setScreenSizeThin(false);
      console.log("small screen");
    } else if (width >= 420) {
      console.log("mobile");
      setScreenSizeMedium(false);
      setScreenSizeLarge(false);
      setScreenSizeMobile(true);
      setScreenSizeSmall(false);
      setScreenSizeThin(false);
    } else if (width <= 419) {
      console.log("thin mobile");
      setScreenSizeMedium(false);
      setScreenSizeLarge(false);
      setScreenSizeMobile(false);
      setScreenSizeThin(true);
      setScreenSizeSmall(false);
    }
  }, [width, height]);

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Container
      fluid
      style={{
        height: "100vh",
      }}
    >
      {/* <Particles
        id="tsparticles"
        options={snowingSettings}
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ position: "absolute !important" }}
      /> */}

      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        </div> */}
      {/* 3 sizes of comps, med, larg, mobile */}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles
          id="tsparticles"
          options={snowingSettings}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {screenSizeLarge ? <LargeWindow /> : <></>}

          {screenSizeMedium ? <MediumWindow /> : <></>}

          {screenSizeMobile ? <MobileWindow /> : <></>}

          {screenSizeSmall ? <SmallWindow /> : <></>}

          {screenSizeThin ? <ThinWindow /> : <></>}
        </div>
      </div>

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
