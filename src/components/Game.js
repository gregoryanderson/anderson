import React, { useState, useEffect, Component } from "react";
import "./Game.css";
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMessage,
  AiOutlineSound,
  AiOutlineForm,
  AiOutlineRocket
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaCommentsDollar } from "react-icons/fa";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missiles: [],
      enemies: [
        { left: 200, top: 100 },
        { left: 300, top: 100 },
        { left: 400, top: 100 },
        { left: 500, top: 100 },
        { left: 600, top: 100 },
        { left: 700, top: 100 },
        { left: 800, top: 100 },
        { left: 900, top: 100 },
        { left: 200, top: 175 },
        { left: 300, top: 175 },
        { left: 400, top: 175 },
        { left: 500, top: 175 },
        { left: 600, top: 175 },
        { left: 700, top: 175 },
        { left: 800, top: 175 },
        { left: 900, top: 175 }
      ],
      hero: {
        left: 575,
        top: 700
      },
      reset: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    console.log(props)
  }


  handleKeyPress(e) {
    let hero = this.state.hero;
    let missiles = this.state.missiles;
    if (e.keyCode === 37) {
      // Left
      hero.left = hero.left - 10;
    }
    if (e.keyCode === 39) {
      // Right
      hero.left = hero.left + 10;
    }
    if (e.keyCode === 32) {
      // Spacebar (fire)
      missiles.push({
        left: hero.left + 20,
        top: hero.top - 20
      });
      this.drawMissiles();
    }
    this.drawHero();
  }

  drawHero() {
    let hero = this.state.hero;
    document.getElementById("hero").style.left = hero.left + "px";
    document.getElementById("hero").style.top = hero.top + "px";
  }

  drawMissiles() {
    let missiles = this.state.missiles;
    document.getElementById("missiles").innerHTML = "";
    for (var i = 0; i < missiles.length; i++) {
      document.getElementById(
        "missiles"
      ).innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
    }
  }

  moveMissiles() {
    let missiles = this.state.missiles;
    for (var i = 0; i < missiles.length; i++) {
      missiles[i].top = missiles[i].top - 8;
    }
  }

  drawEnemies() {
    let enemies = this.state.enemies;
    document.getElementById("enemies").innerHTML = "";
    for (var i = 0; i < enemies.length; i++) {
      document.getElementById(
        "enemies"
      ).innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;
    }
  }

  moveEnemies() {
    let enemies = this.state.enemies;
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].top = enemies[i].top + 1;
    }
  }

  collisionDetection() {
    let enemies = this.state.enemies;
    let missiles = this.state.missiles;
    for (var enemy = 0; enemy < enemies.length; enemy++) {
      for (var missile = 0; missile < missiles.length; missile++) {
        if (
          missiles[missile].left >= enemies[enemy].left &&
          missiles[missile].left <= enemies[enemy].left + 50 &&
          missiles[missile].top <= enemies[enemy].top + 50 &&
          missiles[missile].top >= enemies[enemy].top
        ) {
          enemies.splice(enemy, 1);
          missiles.splice(missile, 1);
        }
      }
    }
  }

  //   reset() {
  //       console.log(this.state.reset)
  //       this.state.reset = !this.state.reset
  //   }

  gameLoop(game) {
    console.log(game);
    setTimeout(this.reset, 1000);
    this.moveMissiles();
    this.drawMissiles();
    this.moveEnemies();
    this.drawEnemies();
    this.collisionDetection();
    // this.state.reset = !this.state.reset;
  }

  componentDidMount() {
    console.log("boom");
    document.addEventListener("keydown", this.handleKeyPress);
    this.gameLoop(this);
  }

  handleClick(e) {
    console.log("lalala", this.state.reset);
    //   this.setState({reset: !this.state.reset})
    this.props.callReset(this.state.reset);
  }

  render() {
    return (
      <section className="game">
        <h1>Invaders</h1>
        <button onClick={e => this.handleClick(e)}>Start Game</button>
        <div id="hero"></div>
        <div id="missiles"></div>
        <div id="enemies"></div>
      </section>
    );
  }
}

export default Game;
