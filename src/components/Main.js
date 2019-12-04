import React from "react";
import "./Main.css";
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMessage,
  AiOutlineSound,
  AiOutlineForm,
  AiOutlineRocket
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Home from "./Home";
import Journal from "./Journal";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects";

const Main = props => {
  const determineTheRoute = () => {
    if (props.route === "home" || props.route === "") {
      return <Home />;
    }
    if (props.route === "experience") {
      return <Experience />;
    }
    if (props.route === "journal") {
      return <Journal />;
    }
    if (props.route === "contact") {
      return <Contact />;
    }
    if (props.route === "projects") {
      return <Projects />;
    }
  };

  return (
    <section className="Main">
      <section id="main--rocket">
        <AiOutlineRocket size={64} color="#EB6D4A" />
      </section>
      {determineTheRoute()}
    </section>
  );
};

export default Main;
