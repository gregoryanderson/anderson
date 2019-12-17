import React, { Component } from "react";
import Enemy from "./Enemy";
import "./Game.css";

const Enemies = props => {
  const drawEnemies = () => {
    let enemies = props.enemies;

    return enemies.map(enemy => {
      return <Enemy top={enemy.top + "vh"} left={enemy.left + "vh"} />;
    });
  };

  return <div id="enemies">{drawEnemies()}</div>;
};

export default Enemies;
