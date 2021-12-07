import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
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

  // ! change this to a switch statement, so ugly

  useEffect(() => {
    console.log(height, width);
    if (width >= 1200) {
      setScreenSizeMedium(false);
      setScreenSizeLarge(true);
      setScreenSizeMobile(false);
      console.log("large");
    } else if (width >= 800) {
      setScreenSizeMedium(true);
      setScreenSizeLarge(false);
      setScreenSizeMobile(false);
      console.log("med screen");
    } else if (width >= 615) {
      setScreenSizeMedium(false);
      setScreenSizeLarge(false);
      setScreenSizeMobile(true);
      console.log("mobile screen");
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
          width: "100wh",
          height: "100vh",
          overflowX: "hidden",
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
            width: "100%",
            height: "100%",
          }}
        >
          {screenSizeLarge ? <LargeWindow /> : <></>}

          {screenSizeMedium ? <MediumWindow /> : <></>}
          {/* 
          {screenSizeMobile ? <MobileWindow /> : <></>}

          {screenSizeSmall ? <SmallWindow /> : <></>}

          {screenSizeThin ? <ThinWindow /> : <></>} */}
        </div>
      </div>
    </Container>
  );
}

export default App;
