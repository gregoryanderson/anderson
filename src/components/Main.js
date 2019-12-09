import React from "react";
import "./Main.css";
import {
  AiOutlineRocket
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects";
import Game from "./Game";

const Main = props => {
  const determineTheRoute = () => {
    if (props.route === "home" || props.route === "") {
      return <Home />;
    }
    if (props.route === "experience") {
      return <Experience />;
    }
    if (props.route === "contact") {
      return <Contact />;
    }
    if (props.route === "projects") {
      return <Projects />;
    }
    if (props.route === "game") {
      return <Game route="game" callReset={props.callReset}/>;
    }
  };

  return (
    <section className="Main">
      <section id="main--rocket">
        <Link to="/game">
          <AiOutlineRocket size={64} color="#EB6D4A" />
        </Link>
      </section>
      {determineTheRoute()}
    </section>
  );
};

export default Main;
