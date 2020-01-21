import React from "react";
import "./Game.css";

const HallOfFame = props => {
  const listPlayers = () => {
    if (props.hof) {
      return props.hof.map(item => {
        return (
          <div id="hall-players">
            <div>
              <p className="hall--player">{item.plyr}</p>
            </div>
            <div>
              <p className="hall--score">{item.scr}</p>
            </div>
          </div>
        );
      });
    }
  };

  return <div id="hall">{listPlayers()}</div>;
};

export default HallOfFame;
