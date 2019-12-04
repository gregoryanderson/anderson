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
  console.log(props)

  const determineBottomLogo = (props) => {
    if (props.route === "projects"){
      return (<AiOutlineLaptop size={300} color="#EB6D4A" />)
    } else if (props.route === "contact"){
      return (<AiOutlineSound size={300} color="#EB6D4A" />)
    } else if (props.route === "experience"){
      return (<AiOutlineLineChart size={300} color="#EB6D4A" />)
    } else if (props.route === "journal"){
      return (<AiOutlineMessage size={300} color="#EB6D4A" />)
    } else {
      return (<AiOutlineHome size={300} color="#EB6D4A" />)
    }
  }

  return (
    <section className="Nav">
      <section id="nav--links">
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineHome size={32} color="#EB6D4A" />
          <p className="nav__p--links">Home</p>
        </Link>
        <Link
          to="/experience"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineLineChart size={32} color="#EB6D4A" />
          <p className="nav__p--links">Experience</p>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineLaptop size={32} color="#EB6D4A" />
          <p className="nav__p--links">Projects</p>
        </Link>
        <Link
          to="/journal"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineForm size={32} color="#EB6D4A" />
          <p className="nav__p--links">Journal</p>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#FFF" }}
          className="nav__section--links"
        >
          <AiOutlineSound size={32} color="#EB6D4A" />
          <p className="nav__p--links">Contact</p>
        </Link>
      </section>
      <section className="nav__section--links nav--header">
        {determineBottomLogo(props)}
      </section>
    </section>
  );
};

export default Nav;
