import React, { Component } from "react";
import "./Game.css";

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
        // { left: 600, top: 100 },
        // { left: 700, top: 100 },
        // { left: 800, top: 100 },
        // { left: 900, top: 100 },
        { left: 200, top: 175 },
        { left: 300, top: 175 },
        { left: 400, top: 175 },
        { left: 500, top: 175 }
        // { left: 600, top: 175 },
        // { left: 700, top: 175 },
        // { left: 800, top: 175 },
        // { left: 900, top: 175 }
      ],
      hero: {
        left: 575,
        top: 700
      },
      reset: false,
      number: null
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.drawHero = this.drawHero.bind(this);
    this.drawMissiles = this.drawMissiles.bind(this);
    this.moveMissiles = this.moveMissiles.bind(this);
    this.drawEnemies = this.drawEnemies.bind(this);
    this.moveEnemies = this.moveEnemies.bind(this);
    this.collisionDetection = this.collisionDetection.bind(this);
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
        if (!missiles[missile] || !enemies[enemy]) {
          console.log("miss", missiles[missile]);
          console.log("enem", enemies[enemy]);
          return;
        } else {
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
  }

  gameLoop() {
    if (this.state.enemies.length) {
      this.moveMissiles();
      this.drawMissiles();
      this.moveEnemies();
      this.drawEnemies();
      this.collisionDetection();
    } else {
        this.setState({reset: true})
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.enemies);
      document.addEventListener("keydown", this.handleKeyPress);
      this.gameLoop();
      this.setState({ number: this.state.number + 1 });
      this.setState({
        missiles: this.state.missiles,
        enemies: this.state.enemies,
        hero: this.state.hero
      });
    }, 30);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <section className="game">
        <h1>{this.state.enemies.length}</h1>
        <h1>Invaders</h1>
        <div id="hero"></div>
        <div id="missiles"></div>
        <div id="enemies"></div>
        {this.state.reset && <p>you have won</p>}
      </section>
    );
  }
}

export default Game;
