import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Game from "./components/Game";
import { Route } from "react-router-dom";
import { postPlayer, getPlayers, getScores } from "./components/apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reset: false,
      round: 0,
      score: 0,
      players: null,
      scores: null,
      hallOfFame: null
    };
  }

  displayScore = playerScore => {
    this.setState({ score: playerScore });
  };

  displayRound = gameRound => {
    this.setState({ round: gameRound });
  };

  setHof = async () => {
    const allPlayers = await getPlayers();
    this.setState({ players: allPlayers });
    const allScores = await getScores();
    this.setState({ scores: allScores });
    let hof = [];
    allScores.map(score => {
      let player = allPlayers.find(player => player.id === score.player_id);
      hof.push({ scr: score.score, plyr: player.name });
    });
    hof.sort((a,b) => {
      return b.scr - a.scr
    })
    if (hof.length > 10){
      let shortHof = hof.slice(0, 9)
      this.setState({ hallOfFame: shortHof });
    } else {
      this.setState({ hallOfFame: hof });
    }
  };

  componentDidMount() {
    this.setHof();
  }
  
  render() {
    return (
      <div className="App">
        {
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Nav route="" />
                <Main route="" />
              </>
            )}
          />
        }
        {
          <Route
            path="/home"
            render={() => (
              <>
                <Nav route="home" />
                <Main route="home" />
              </>
            )}
          />
        }
        {
          <Route
            path="/resume"
            render={() => (
              <>
                <Nav route="resume" />
                <Main route="resume" />
              </>
            )}
          />
        }
        {
          <Route
            path="/experience"
            render={() => (
              <>
                <Nav route="experience" />
                <Main route="experience" />
              </>
            )}
          />
        }
        {
          <Route
            path="/journal"
            render={() => (
              <>
                <Nav route="journal" />
                <Main route="journal" />
              </>
            )}
          />
        }
        {
          <Route
            path="/contact"
            render={() => (
              <>
                <Nav route="contact" />
                <Main route="contact" />
              </>
            )}
          />
        }
        {
          <Route
            path="/content"
            render={() => (
              <>
                <Nav route="content" />
                <Main route="content" />
              </>
            )}
          />
        }
        {
          <Route
            path="/projects"
            render={() => (
              <>
                <Nav route="projects" />
                <Main route="projects" />
              </>
            )}
          />
        }
        {
          <Route
            path="/game"
            render={() => (
              <>
                <Nav
                  route="game"
                  score={this.state.score}
                  round={this.state.round}
                />
                <Main
                  route="game"
                  displayScore={this.displayScore}
                  displayRound={this.displayRound}
                  hof={this.state.hallOfFame}
                />
              </>
            )}
          />
        }
      </div>
    );
  }
}

export default App;
