import React, { Component } from "react";
import "./Game.css";
import "./Main.css";
import Hero from "./Hero";
import Missiles from "./Missiles";
import Enemies from "./Enemies";
import setEnemyState from "./setEnemyState";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missiles: [],
      enemies: [
        { left: 200, top: 0, row: 2 },
        { left: 300, top: 0, row: 2 },
        { left: 400, top: 0, row: 2 },
        { left: 500, top: 0, row: 2 },
        { left: 200, top: 75, row: 1 },
        { left: 300, top: 75, row: 1 },
        { left: 400, top: 75, row: 1 },
        { left: 500, top: 75, row: 1 }
      ],
      hero: {
        left: 350,
        top: 500
      },
      winner: false,
      loser: false,
      toggle: true,
      round: 0,
      score: null,
      showModal: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.moveMissiles = this.moveMissiles.bind(this);
    // this.drawEnemies = this.drawEnemies.bind(this);
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
    }
  }

  moveMissiles() {
    let missiles = this.state.missiles;
    for (var i = 0; i < missiles.length; i++) {
      missiles[i].top = missiles[i].top - 8;
    }
  }

  moveEnemies() {
    let enemies = this.state.enemies;
    if (this.state.loser) {
      enemies.map(enemy => {
        let left = this.getHero(enemy);
        let top = this.getHeroTop(enemy);
        enemy.left = left
        enemy.top = top
      });
    } else {
      enemies.map(enemy => {
        enemy.top = enemy.top + 1;
        if (enemy.top >= 450) {
          this.setState({ loser: true });
          this.setState({ showModal: true });
        }
      });
    }
  }

  getHero(enemy) {
    let heroPosition = this.state.hero.left;
    if (heroPosition > enemy.left) {
      return enemy.left + 1;
    } else if (heroPosition < enemy.left) {
      return enemy.left - 1;
    } else if (heroPosition === enemy.left){
      return enemy.left
    }
  }

  getHeroTop(enemy) {
    let heroPosition = this.state.hero.top;
    if (heroPosition > enemy.top) {
      return enemy.top + 1;
    } else if (heroPosition < enemy.top) {
      return enemy.top - 1;
    } else if (heroPosition === enemy.top){
      return enemy.top
    }
  }

  collisionDetection() {
    let enemies = this.state.enemies;
    let missiles = this.state.missiles;
    for (var enemy = 0; enemy < enemies.length; enemy++) {
      for (var missile = 0; missile < missiles.length; missile++) {
        if (!missiles[missile] || !enemies[enemy]) {
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

  checkForWinner() {
    if (!this.state.enemies.length) {
      this.setState({ winner: true });
    }
  }

  nextRound(roundNum) {
    this.setState({ round: roundNum + 1 });
    this.callSetEnemyState(roundNum);
    this.setState({ winner: false });
    this.setState({ loser: false });
    this.setState({ missiles: [] });
  }

  callSetEnemyState() {
    let enemies = setEnemyState(this.state.round);
    this.setState({ enemies: enemies });
  }

  toggleEnemies(toggleSet) {
    if (this.state.loser) {
      // console.log("in toggle");
      this.setState({ toggle: toggleSet });
    }
  }

  determineScore() {
    let kills = 8 - this.state.enemies.length;
    let bonus = this.determineBonus();
    let total = (this.state.round + 1) * kills * 20 + bonus;
    this.setState({ score: total });
  }

  determineBonus() {
    let round = this.state.round;
    if (round === 0) {
      return 0;
    } else if (round === 1) {
      return 160;
    } else if (round === 2) {
      return 480;
    } else if (round === 3) {
      return 960;
    } else if (round === 4) {
      return 1600;
    } else {
      return 2400;
    }
  }

  gameLoop() {
    if (!this.winner || !this.loser) {
      this.moveMissiles();
      this.moveEnemies();
      this.collisionDetection();
      this.checkForWinner();
      this.determineScore();
      this.toggleEnemies(this.state.toggle);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      document.addEventListener("keydown", this.handleKeyPress);
      this.gameLoop();
      this.setState({ number: this.state.number + 1 });
      this.setState({
        missiles: this.state.missiles,
        enemies: this.state.enemies,
        hero: this.state.hero
      });
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <section className="game">
          <section className="actual-game">
            <Hero hero={this.state.hero} />
            {/* <div id="missiles"></div> */}
            <Missiles missiles={this.state.missiles} />
            {/* <div id="enemies"></div> */}
            <Enemies enemies={this.state.enemies} />
          </section>
          {this.state.winner && (
            <section id="modal" left="350">
              <h1>You have won</h1>
              <button onClick={() => this.nextRound(this.state.round)}>
                Next round
              </button>
              {/* <button onClick={this.setState({ showModal: false })}></button> */}
            </section>
          )}
          {this.state.loser && (
            <section id="modal" left="350">
              <p>You have loooost</p>
              {/* <button onClick={this.setState({ showModal: false })}></button> */}
            </section>
          )}
          <h1 className="text">{this.state.enemies.length}</h1>
          <h1 className="text">{this.state.score}</h1>
          <h1 className="text">Invaders</h1>
        </section>
      </>
    );
  }
}

export default Game;
