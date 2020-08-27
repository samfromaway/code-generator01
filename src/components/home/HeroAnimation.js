import React from "react";
import "./HeroAnimation.css";
import Machine from "../../images/machine.png";
import Happy from "../../images/happy.png";
import FirebaseLogo from "../../images/icons/firebase.png";
import DesignLogo from "../../images/icons/design.svg";
import ReactLogo from "../../images/icons/react-logo.svg";

const HeroAnimation = () => {
  const smileys = [
    { marginLeft: 5, marginTop: 20, delay: "1.8s", id: 1 },
    { marginLeft: 25, marginTop: 25, delay: "3.8s", id: 2 },
    { marginLeft: 15, marginTop: 48, delay: "2.5s", id: 3 },
    { marginLeft: -35, marginTop: 50, delay: "4.5s", id: 4 },
    { marginLeft: -35, marginTop: 5, delay: "1.2s", id: 5 },
  ];
  const reactIcons = [
    { margin: 10, delay: "1.3s", id: 1 },
    { margin: -25, delay: "3.5s", id: 2 },
  ];
  const firebaseIcons = [
    { margin: -30, delay: "4.1s", id: 1 },
    { margin: 18, delay: "2s", id: 2 },
  ];
  const designIcons = [
    { margin: -45, delay: "0.7s", id: 1 },
    { margin: -12, delay: "3s", id: 2 },
  ];

  return (
    <div className="heroAnimation__wrapper">
      <img
        src={Machine}
        alt="machine"
        className="heroAnimation__imgMachine"
        width="200px"
      />
      {smileys.map((e) => (
        <img
          src={Happy}
          key={e.id}
          alt="smile"
          className="heroAnimation__imgSmile"
          width="20px"
          height="20px"
          style={{
            marginLeft: e.marginLeft,
            marginTop: e.marginTop,
            animationDelay: e.delay,
          }}
        />
      ))}
      {reactIcons.map((e) => (
        <img
          key={e.id}
          src={ReactLogo}
          alt="react icon"
          className="heroAnimation__imgLogo"
          width="40px"
          height="40px"
          style={{ marginLeft: e.margin, animationDelay: e.delay }}
        />
      ))}
      {firebaseIcons.map((e) => (
        <img
          key={e.id}
          src={FirebaseLogo}
          alt="firebase icon"
          className="heroAnimation__imgLogo"
          width="35px"
          height="35px"
          style={{ marginLeft: e.margin, animationDelay: e.delay }}
        />
      ))}
      {designIcons.map((e) => (
        <img
          key={e.id}
          src={DesignLogo}
          alt="design icon"
          className="heroAnimation__imgLogo"
          width="35px"
          height="35px"
          style={{ marginLeft: e.margin, animationDelay: e.delay }}
        />
      ))}
    </div>
  );
};

export default HeroAnimation;
