import React, {Component} from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Game from './components/Game'
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reset: false
    };
    this.callReset = this.callReset.bind(this)
  }

  callReset(hm) {
    console.log(this)
    this.setState({reset: hm})
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
                <Nav route="game"/>
                <Main route="game" callReset={this.callReset}/>
              </>
            )}
          />
        }
      </div>
    );
  }
}

export default App;
