import React, { useEffect, useState } from "react";
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMessage,
  AiOutlineSound
} from "react-icons/ai";
import "./Nav.css";
import "./Game.css";
import { Link } from "react-router-dom";

const Nav = props => {
  const [projects, setProjects] = useState(false);
  const [experience, setExperience] = useState(false);
  const [contact, setContact] = useState(false);
  const [home, setHome] = useState(false);

  useEffect(() => {
    if (props.route === "home") {
      setProjects(false);
      setExperience(false);
      setHome(true);
      setContact(false);
    } else if (props.route === "contact") {
      setProjects(false);
      setExperience(false);
      setHome(false);
      setContact(true);
    } else if (props.route === "experience") {
      setProjects(false);
      setExperience(true);
      setHome(false);
      setContact(false);
    } else if (props.route === "projects") {
      setProjects(true);
      setExperience(false);
      setHome(false);
      setContact(false);
    } else {
      setProjects(false);
      setExperience(false);
      setHome(false);
      setContact(false);
    }
  });

  const determineBottomLogo = props => {
    if (props.route === "projects") {
      return <AiOutlineLaptop size={300} color="#454360" />;
    } else if (props.route === "contact") {
      return <AiOutlineSound size={300} color="#454360" />;
    } else if (props.route === "experience") {
      return <AiOutlineLineChart size={300} color="#454360" />;
    } else if (props.route === "journal") {
      return <AiOutlineMessage size={300} color="#454360" />;
    } else if (props.route === "home") {
      return <AiOutlineHome size={300} color="#454360" />;
    } else {
      return (
        <section className="scoreboard">
          <h1 className="round">Round: </h1>
          <h1 className="points">5 </h1>
          <h1 className="score">Score: </h1>
          <h1 className="points">234567 </h1>
          {/* <h1 className="text">Invaders</h1> */}
        </section>
      );
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
          to="/projects"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineLaptop size={32} color="#EB6D4A" />
          <p className={projects ? "nav__p--links--true" : "nav__p--links"}>
            Projects
          </p>
        </Link>
        {/* <Link
          to="/journal"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineForm size={32} color="#EB6D4A" />
          <p className="nav__p--links">Journal</p>
        </Link> */}
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
