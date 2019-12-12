import React from "react";
import "./Main.css";
import { AiOutlineRocket } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects";
import Game from "./Game";

const Main = props => {
  const determineTheRoute = () => {
    if (props.route === "home" || props.route === "") {
      return (
        <>
          <section id="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Home />
        </>
      );
    }
    if (props.route === "experience") {
      return (
        <>
          <section id="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Home />
        </>
      );
    }
    if (props.route === "contact") {
      return (
        <>
          <section id="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Home />
        </>
      );
    }
    if (props.route === "projects") {
      return (
        <>
          <section id="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Home />
          </>
      );
    }
    if (props.route === "game") {
      return (
        <section className="main--content">
          <Game route="game" callReset={props.callReset} />;
        </section>

      )
    }
  };

  return (
    <section className="Main">
      {determineTheRoute()}
    </section>
  );
};

export default Main;
