import React from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Route, Redirect } from "react-router-dom";

export const App = props => {
  const handleRoute = route => {
    console.log(route);
  };

  return (
    <div className="App">
      {
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Nav handleRoute={handleRoute} />
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
              <Nav handleRoute={handleRoute} />
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
              <Nav handleRoute={handleRoute} />
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
              <Nav handleRoute={handleRoute} />
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
              <Nav handleRoute={handleRoute} />
              <Main route="contact" />
            </>
          )}
        />
      }
    </div>
  );
};

export default App;
