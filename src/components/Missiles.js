import React, { Component } from "react";
import Missile from "./Missile";
import "./Game.css";

const Missiles = props => {

  const drawMissiles = () => {
    let missiles = props.missiles;

    return missiles.map(missile => {
      if (missile.top < 0) {
        missiles.splice(missile, 1);
        
      } else {
        return <Missile top={missile.top} left={missile.left} />;
      }
    });
  };

  return <div id="missiles">{drawMissiles()}</div>;
};

export default Missiles;
