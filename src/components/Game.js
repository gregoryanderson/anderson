import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import "./Main.css";
import Hero from "./Hero";
import Missiles from "./Missiles";
import Enemies from "./Enemies";
import setEnemyState from "./setEnemyState";
import "./Projects.css";
import "./Contact.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missiles: [],
      enemies: [
        { left: 200, top: 75, row: 2 },
        { left: 300, top: 75, row: 2 },
        { left: 400, top: 75, row: 2 },
        { left: 500, top: 75, row: 2 },
        { left: 200, top: 0, row: 1 },
        { left: 300, top: 0, row: 1 },
        { left: 400, top: 0, row: 1 },
        { left: 500, top: 0, row: 1 }
      ],
      hero: {
        left: 350,
        top: 500
      },
      winner: false,
      loser: false,
      toggle: true,
      round: 0,
      score: 0,
      showModal: false,
      readyToPlay: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.moveMissiles = this.moveMissiles.bind(this);
    this.moveEnemies = this.moveEnemies.bind(this);
    this.collisionDetection = this.collisionDetection.bind(this);
  }

  handleKeyPress(e) {
    let hero = this.state.hero;
    let missiles = this.state.missiles;
    if (e.keyCode === 37 && hero.left > 50) {
      // Left
      hero.left = hero.left - 10;
    }
    if (e.keyCode === 39 && hero.left < 600) {
      // Right
      hero.left = hero.left + 10;
    }
    if (e.keyCode === 32 && !this.state.loser) {
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
        let newEnemy = this.encircleHero(enemy);
        enemy.left = newEnemy.left;
        enemy.top = newEnemy.top;
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

  getEnemiesToBottomLimit = (enemy, newEnemy) => {
    return (newEnemy = { top: enemy.top + 1, left: enemy.left });
  };

  getEnemiesToLeftLimit = (enemy, newEnemy) => {
    return (newEnemy = { top: enemy.top, left: enemy.left + 1 });
  };

  getEnemiesToRightLimit = (enemy, newEnemy) => {
    return (newEnemy = { top: enemy.top, left: enemy.left - 1 });
  };

  encircleHero(enemy) {
    let leftLimit = this.state.hero.left - 50;
    let rightLimit = this.state.hero.left + 50;
    let topLimit = this.state.hero.top + 50;
    let bottomLimit = this.state.hero.top - 50;

    let newEnemy = { left: enemy.left, top: enemy.top };

    if (enemy.left < leftLimit) {
      return this.getEnemiesToLeftLimit(enemy, newEnemy);
    } else if (enemy.left > rightLimit) {
      return this.getEnemiesToRightLimit(enemy, newEnemy);
    } else if (enemy.top < bottomLimit) {
      return this.getEnemiesToBottomLimit(enemy, newEnemy);
    } else {
      return this.enemyMerryGoRound(enemy, newEnemy);
    }
  }

  enemyMerryGoRound(enemy, newEnemy) {
    let heroLeft = this.state.hero.left;
    let heroTop = this.state.hero.top;

    if (enemy.top <= heroTop && enemy.left <= heroLeft) {
      newEnemy.top = enemy.top + 1;
      newEnemy.left = enemy.left - 1;
    }
    if (enemy.top >= heroTop && enemy.left <= heroLeft) {
      newEnemy.left = enemy.left + 1;
      newEnemy.top = enemy.top + 1;
    }
    if (enemy.top >= heroTop && enemy.left >= heroLeft) {
      newEnemy.left = enemy.left + 1;
      newEnemy.top = enemy.top - 1;
    }
    if (enemy.top <= heroTop && enemy.left >= heroLeft) {
      newEnemy.left = enemy.left - 1;
      newEnemy.top = enemy.top - 1;
    }
    return newEnemy;
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

  startOver() {
    this.setState({ round: 0 });
    this.setState({
      enemies: [
        { left: 200, top: 75, row: 2 },
        { left: 300, top: 75, row: 2 },
        { left: 400, top: 75, row: 2 },
        { left: 500, top: 75, row: 2 },
        { left: 200, top: 0, row: 1 },
        { left: 300, top: 0, row: 1 },
        { left: 400, top: 0, row: 1 },
        { left: 500, top: 0, row: 1 }
      ]
    });
    this.setState({
      hero: {
        left: 350,
        top: 500
      }
    });
    this.setState({ winner: false });
    this.setState({ loser: false });
    this.setState({ missiles: [] });
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
      this.setState({ toggle: toggleSet });
    }
  }

  determineTotalEnemiesForRound = () => {
    let round = this.state.round;
    if (round === 0) {
      return 8;
    } else if (round === 1) {
      return 12;
    } else if (round === 2) {
      return 16;
    } else if (round === 3) {
      return 20;
    } else if (round === 4) {
      return 24;
    }
  };

  determineScore() {
    let totalEnemiesForRound = this.determineTotalEnemiesForRound();
    let kills = totalEnemiesForRound - this.state.enemies.length;
    let roundBonus = this.determineBonus();
    let actualRound = this.state.round + 1;
    let killBonus = actualRound * 250;
    let killScore = killBonus * kills;
    let total = killScore + roundBonus;
    this.setState({ score: total });
  }

  determineBonus() {
    let round = this.state.round;
    if (round === 0) {
      return 0;
    } else if (round === 1) {
      return 160;
    } else if (round === 2) {
      return 640;
    } else if (round === 3) {
      return 1600;
    } else if (round === 4) {
      return 3200;
    } else {
      return 5600;
    }
  }

  getReady = () => {
    this.setState({ readyToPlay: true });
  };

  updateScoreBoard = () => {
    this.props.displayScore(this.state.score);
    this.props.displayRound(this.state.round);
  };

  gameLoop() {
    if (this.state.readyToPlay) {
      this.moveMissiles();
      this.moveEnemies();
      this.collisionDetection();
      this.checkForWinner();
      this.determineScore();
      this.updateScoreBoard();
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
          {!this.state.readyToPlay && (
            <section id="modal" left="350">
              <p>Arrows to Move</p>
              <p>Spacebar to Shoot</p>
              <p></p>
              <p>Are You Ready?</p>
              <section className="sontact--buttons">
                <section className="projects__buttons">
                  <button
                    onClick={() => this.getReady()}
                    className="projects__button"
                  >
                    Let's Play!
                  </button>
                </section>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  <button className="projects__button">Exit</button>
                </Link>
              </section>
            </section>
          )}
          {this.state.winner && (
            <section id="modal" left="350">
              <h1>You have won</h1>
              <button onClick={() => this.nextRound(this.state.round)}>
                Next round
              </button>
            </section>
          )}
          {this.state.loser && (
            <section id="modal" left="350">
              <p>You have loooost</p>
              <button onClick={() => this.startOver()}>Try Again!</button>
            </section>
          )}
          {/* <section className="scoreboard">
            <h1 className="round">Round: </h1>
            <h1 className="points">{this.state.round + 1} </h1>
            <h1 className="score">Score: </h1>
            <h1 className="points">{this.state.score} </h1>
            <h1 className="text">Invaders</h1>
          </section> */}
          <section className="actual-game">
            <Hero hero={this.state.hero} />
            <Missiles missiles={this.state.missiles} />
            <Enemies enemies={this.state.enemies} />
          </section>
        </section>
      </>
    );
  }
}

export default Game;
