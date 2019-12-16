import React from "react";
import "./Game.css";

const Missile = props => {
  return (
    <div
      className="missile1"
      style={{ top: props.top, left: props.left }}
    ></div>
  );
};

// 'left:${missiles[i].left}px; top:${missiles[i].top}px'
export default Missile;
