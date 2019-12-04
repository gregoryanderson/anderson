import React from "react";
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMessage,
  AiOutlineSound,
  AiOutlineForm,
  AiOutlineRocket
} from "react-icons/ai";
import "./Nav.css";
import { Route, Redirect, Link } from "react-router-dom";

const Nav = props => {
  const handleClick = route => {
    props.handleRoute(route);
  };

  return (
    <section className="Nav">
      {/* <section className="nav__section--links nav--header">
        <AiOutlineRocket size={64} color="#EB6D4A" />
      </section> */}
      <section id="nav--links">
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineHome size={32} color="#EB6D4A" />
          <p className="nav__p--links" onClick={() => handleClick("home")}>
            Home
          </p>
        </Link>
        <Link
          to="/experience"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineLineChart size={32} color="#EB6D4A" />
          <p
            className="nav__p--links"
            onClick={() => handleClick("experience")}
          >
            Experience
          </p>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineLaptop size={32} color="#EB6D4A" />
          <p className="nav__p--links" onClick={() => handleClick("projects")}>
            Projects
          </p>
        </Link>
        <Link
          to="/journal"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineForm size={32} color="#EB6D4A" />
          <p className="nav__p--links" onClick={() => handleClick("journal")}>
            Journal
          </p>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineSound size={32} color="#EB6D4A" />
          <p className="nav__p--links" onClick={() => handleClick("contact")}>
            Contact
          </p>
        </Link>
      </section>
      <section className="nav__section--links nav--header">
        <AiOutlineHome size={300} color="#EB6D4A" />
      </section>
    </section>
  );
};

export default Nav;
