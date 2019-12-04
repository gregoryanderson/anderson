import React from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Route, Redirect } from "react-router-dom";

export const App = props => {
  
  return (
    <div className="App">
      {
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Nav />
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
              <Nav />
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
              <Nav />
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
              <Nav />
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
              <Nav />
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
              <Nav />
              <Main route="projects" />
            </>
          )}
        />
      }
    </div>
  );
};

export default App;
