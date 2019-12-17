import React from "react";
import "./Game.css";

const Missile = props => {
  return (
    <div
      className="missile1"
      style={{ top: props.top + "vh", left: props.left + "vh"}}
    ></div>
  );
};

export default Missile;
