import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import "./Main.css";
import Hero from "./Hero";
import Missiles from "./Missiles";
import Enemies from "./Enemies";
import HallOfFame from "./HallOfFame";

import setEnemyState from "./setEnemyState";
import "./Projects.css";
import "./Contact.css";
import { postPlayer, getPlayers, getScores, postScore } from "./apiCalls";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missiles: [],
      enemies: [
        { left: 10, top: 10, row: 2 },
        { left: 20, top: 10, row: 2 },
        { left: 30, top: 10, row: 2 },
        { left: 40, top: 10, row: 2 },
        { left: 10, top: 0, row: 1 },
        { left: 20, top: 0, row: 1 },
        { left: 30, top: 0, row: 1 },
        { left: 40, top: 0, row: 1 }
      ],
      hero: {
        left: 25,
        top: 65
      },
      winner: false,
      loser: false,
      toggle: true,
      round: 0,
      score: 0,
      name: "",
      showModal: false,
      readyToPlay: false,
      players: null,
      scores: null,
      hall: this.props.hof,
      highScore: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.moveMissiles = this.moveMissiles.bind(this);
    this.moveEnemies = this.moveEnemies.bind(this);
    this.collisionDetection = this.collisionDetection.bind(this);
  }

  handleKeyPress(e) {
    let hero = this.state.hero;
    let missiles = this.state.missiles;
    if (e.keyCode === 37 && hero.left > 5) {
      // Left
      hero.left = hero.left - 1;
    }
    if (e.keyCode === 39 && hero.left < 65) {
      // Right
      hero.left = hero.left + 1;
    }
    if (e.keyCode === 32 && !this.state.loser) {
      // Spacebar (fire)
      missiles.push({
        left: hero.left + 2,
        top: hero.top - 2
      });
    }
  }

  moveMissiles() {
    let missiles = this.state.missiles;
    for (var i = 0; i < missiles.length; i++) {
      missiles[i].top = missiles[i].top - 1;
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
        enemy.top = enemy.top + 0.2;
        if (enemy.top >= 60) {
          this.setState({ loser: true });
          this.setState({ showModal: true });
          this.checkScore();
        }
      });
    }
  }

  checkScore = () => {
    let scoresLength = this.props.hof.length - 1;
    console.log(scoresLength);
    let lowestQualifier = this.props.hof[scoresLength].scr;
    console.log(lowestQualifier);
    console.log(this.state.score);
    if (this.state.score > lowestQualifier) {
      // console.log("lalala");
      this.setState({ highScore: true });
    }
  };

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
    let leftLimit = this.state.hero.left - 5;
    let rightLimit = this.state.hero.left + 5;
    let topLimit = this.state.hero.top + 5;
    let bottomLimit = this.state.hero.top - 5;

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
            missiles[missile].left <= enemies[enemy].left + 5 &&
            missiles[missile].top <= enemies[enemy].top + 5 &&
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
    this.setState({ highScore: false });
    this.setState({ round: 0 });
    this.setState({
      enemies: [
        { left: 10, top: 10, row: 2 },
        { left: 20, top: 10, row: 2 },
        { left: 30, top: 10, row: 2 },
        { left: 40, top: 10, row: 2 },
        { left: 10, top: 0, row: 1 },
        { left: 20, top: 0, row: 1 },
        { left: 30, top: 0, row: 1 },
        { left: 40, top: 0, row: 1 }
      ]
    });
    this.setState({
      hero: {
        left: 25,
        top: 65
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
    let killBonus = actualRound * 295;
    let killScore = killBonus * kills;
    let total = killScore + roundBonus;
    this.setState({ score: total });
    this.props.displayScore(total);
  }

  determineBonus() {
    let round = this.state.round;
    if (round === 0) {
      return 0;
    } else if (round === 1) {
      return 2360;
    } else if (round === 2) {
      return 9440;
    } else if (round === 3) {
      return 23600;
    } else if (round === 4) {
      return 47200;
    } else {
      return 82600;
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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = async () => {
    let playerId = await postPlayer(this.state.name);
    let scoreId = await postScore(this.state.score, playerId.id);
    let allPlayers = await getPlayers();
    let allScores = await getScores();
    let hof = [];
    allScores.map(score => {
      let player = allPlayers.find(player => player.id === score.player_id);
      hof.push({ scr: score.score, plyr: player.name });
    });
    hof.sort((a, b) => {
      return b.scr - a.scr;
    });
    if (hof.length > 10) {
      let shortHof = hof.slice(0, 9);
      this.setState({ hall: shortHof });
    } else {
      this.setState({ hall: hof });
    }
    this.startOver();
  };

  componentDidMount() {
    console.log(this.props);
    this.interval = setInterval(() => {
      document.addEventListener("keydown", this.handleKeyPress);
      this.gameLoop();
      this.setState({ number: this.state.number + 1 });
      this.setState({
        missiles: this.state.missiles,
        enemies: this.state.enemies,
        hero: this.state.hero
      });
    }, 75);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <section className="game">
          {!this.state.readyToPlay && (
            <section id="modal">
              <p>Arrows to Move</p>
              <p>Spacebar to Shoot</p>
              <p></p>
              <p className="ready">Are You Ready?</p>
              <section className="sontact--buttons">
                <section className="projects__buttons">
                  <button
                    onClick={() => this.getReady()}
                    className="srojects__button"
                  >
                    Let's Play!
                  </button>
                </section>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  <button className="srojects__button">Exit</button>
                </Link>
              </section>
            </section>
          )}
          {this.state.winner && (
            <section id="modal-2" left="350">
              <h1 className="ready">You have won this round!</h1>
              <button
                className="srojects__button"
                onClick={() => this.nextRound(this.state.round)}
              >
                Next Round
              </button>
            </section>
          )}
          {this.state.loser && (
            <section id="modal-3" left="350">
              <p className="ready">Oh no!</p>
              <button
                className="srojects__button"
                onClick={() => this.startOver()}
              >
                Try Again!
              </button>
            </section>
          )}
          {this.state.highScore && (
            <section id="modal-4" left="350">
              <p className="ready">Enter Name for High Score!</p>
              <input
                id="input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              ></input>
              <button
                className="srojects__button"
                onClick={() => this.handleClick()}
              >
                Enter
              </button>
            </section>
          )}
          <section className="actual-game">
            <Hero hero={this.state.hero} />
            <Missiles missiles={this.state.missiles} />
            <Enemies enemies={this.state.enemies} />
          </section>
        </section>
        <section className="sideboard">
          <section id="hall--section">
            <h1 id="hall--title">Hall of Fame:</h1>
            <HallOfFame hof={this.state.hall} />
          </section>
          <section id="sideboard--img">
            <img
              src={require("./GREG-01.png")}
              alt="Gregory Anderson"
              className="game--image"
            />
          </section>
        </section>
      </>
    );
  }
}

export default Game;
