import React from "react";
import "./Main.css";
import { AiOutlineRocket } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Contact from "./Contact";
import Content from "./Content";
import Projects from "./Projects";
import Game from "./Game";
import Resume from "./Resume";


const Main = props => {
  const determineTheRoute = () => {
    if (props.route === "home" || props.route === "") {
      return (
        <>
          <section className="main--rocket">
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
          <section className="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Experience />
        </>
      );
    }
    if (props.route === "contact") {
      return (
        <>
          <section className="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Contact />
        </>
      );
    }
    if (props.route === "content") {
      return (
        <>
          <section className="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Content />
        </>
      );
    }
    if (props.route === "resume") {
      return (
        <>
          <section className="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Resume />
        </>
      );
    }
    if (props.route === "projects") {
      return (
        <>
          <section className="main--rocket">
            <Link to="/game">
              <AiOutlineRocket size={64} color="#EB6D4A" />
            </Link>
          </section>
          <Projects />
        </>
      );
    }
    if (props.route === "game") {
      return (
        <>
          <section className="main--sontent">
            <Game route="game" displayScore={props.displayScore} displayRound={props.displayRound} hof={props.hof}/>
          </section>
        </>
      );
    }
  };

  return <section className="Main">{determineTheRoute()}</section>;
};

export default Main;
