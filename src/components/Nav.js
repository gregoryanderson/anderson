import React, { useEffect, useState } from "react";
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMessage,
  AiOutlineSound,
  AiOutlineVideoCamera,
  AiOutlinePaperClip
} from "react-icons/ai";
import "./Nav.css";
import "./Game.css";
import { Link } from "react-router-dom";

const Nav = props => {
  const [projects, setProjects] = useState(false);
  const [experience, setExperience] = useState(false);
  const [contact, setContact] = useState(false);
  const [home, setHome] = useState(false);
  const [content, setContent] = useState(false);
  const [resume, setResume] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);

  const displayScore = playerScore => {
    setScore(playerScore);
  };

  const displayRound = gameRound => {
    setRound(gameRound);
  };

  useEffect(() => {
    if (props.route === "home") {
      setProjects(false);
      setExperience(false);
      setHome(true);
      setContact(false);
      setContent(false);
      setResume(false);
    } else if (props.route === "contact") {
      setProjects(false);
      setExperience(false);
      setHome(false);
      setContact(true);
      setContent(false);
      setResume(false);
    } else if (props.route === "resume") {
      setProjects(false);
      setExperience(false);
      setHome(false);
      setContact(false);
      setContent(false);
      setResume(true);
    } else if (props.route === "experience") {
      setProjects(false);
      setExperience(true);
      setHome(false);
      setContact(false);
      setContent(false);
      setResume(false);
    } else if (props.route === "projects") {
      setProjects(true);
      setExperience(false);
      setHome(false);
      setContact(false);
      setContent(false);
      setResume(false);
    } else if (props.route === "content") {
      setProjects(false);
      setExperience(false);
      setHome(false);
      setContact(false);
      setContent(true);
      setResume(false);
    } else {
      setProjects(false);
      setExperience(false);
      setHome(false);
      setContact(false);
      setContent(false);
      setResume(false);
    }
  });

  const determineBottomLogo = props => {
    console.log(props)
    if (props.route === "projects") {
      return <AiOutlineLaptop size={300} color="#454360" />;
    } else if (props.route === "contact") {
      return <AiOutlineSound size={300} color="#454360" />;
    } else if (props.route === "content") {
      return <AiOutlineSound size={300} color="#454360" />;
    } else if (props.route === "experience") {
      return <AiOutlineLineChart size={300} color="#454360" />;
    } else if (props.route === "resume") {
      return <AiOutlinePaperClip size={300} color="#454360" />;
    } else if (props.route === "journal") {
      return <AiOutlineMessage size={300} color="#454360" />;
    } else if (props.route === "game") {
      return (
        <section className="scoreboard">
          <section id="scoreboard--title">
            <h1>SPACE INVADERS</h1>
          </section>
          <section id="scoreboard--content">
            <h1 className="round">Round </h1>
            <h1 className="points">{props.round + 1}</h1>
            <h1 className="score">Score </h1>
            <h1 className="points">{props.score}</h1>
          </section>
          {/* <h1 className="text">Invaders</h1> */}
        </section>
      );
    } else {
      return <AiOutlineHome size={300} color="#454360" />;
    }
  };

  return (
    <section className="Nav">
      <section id="nav--links">
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineHome size={32} color="#EB6D4A" />
          <p className={home ? "nav__p--links--true" : "nav__p--links"}>Home</p>
        </Link>
        <Link
          to="/experience"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineLineChart size={32} color="#EB6D4A" />
          <p className={experience ? "nav__p--links--true" : "nav__p--links"}>
            Experience
          </p>
        </Link>
        <Link
          to="/content"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineVideoCamera size={32} color="#EB6D4A" />
          <p className={content ? "nav__p--links--true" : "nav__p--links"}>
            Content
          </p>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineLaptop size={32} color="#EB6D4A" />
          <p className={projects ? "nav__p--links--true" : "nav__p--links"}>
            Projects
          </p>
        </Link>
        <Link
          to="/resume"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlinePaperClip size={32} color="#EB6D4A" />
          <p className={resume ? "nav__p--links--true" : "nav__p--links"}>
            Resume
          </p>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineSound size={32} color="#EB6D4A" />
          <p className={contact ? "nav__p--links--true" : "nav__p--links"}>
            Contact
          </p>
        </Link>
      </section>
      <section className="nav__section--links nav--header">
        {determineBottomLogo(props)}
      </section>
    </section>
  );
};

export default Nav;
