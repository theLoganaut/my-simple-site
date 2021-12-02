const snowing = {
  background: {
    color: {
      value: "#D3D3D3",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opactiy: 0,
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 0.3,
        opacity: 1,
        size: 4,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 0.5,
        },
      },
    },
  },
  particles: {
    shape: {
      type: "images",
      options: {
        images: [
          {
            src: "/images/javascriptSymbolColor.png",
            width: 500,
            height: 500,
          },
          {
            src: "/images/awsCloudBW.png",
            width: 500,
            height: 300,
          },
          {
            src: "/images/reactColored.png",
            width: 500,
            height: 500,
          },
          {
            src: "/images/designCogBW.png",
            width: 500,
            height: 500,
          },
          {
            src: "/images/htmlAndCssBW.png",
            width: 500,
            height: 500,
          },
          {
            src: "/images/lightbulbColored.png",
            width: 500,
            height: 500,
          },
          {
            src: "/images/serversColored.png",
            width: 500,
            height: 500,
          },
          {
            src: "/images/lockedInfoBW.png",
            width: 500,
            height: 500,
          },
        ],
      },
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 500,
      opacity: 0.4,
      width: 2,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: "bottom",
      enable: true,
      path: {},
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      spin: {},
    },
    number: {
      density: {
        enable: true,
      },
      limit: 80,
      value: 400,
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0.2,
        max: 0.5,
      },
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 20,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
};

export default snowing;
