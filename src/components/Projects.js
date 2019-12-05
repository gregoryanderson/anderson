import React from "react";
import "./Projects.css";
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

const Projects = props => {
  return (
    <section className="main--content">
      <section className="contact--buttons">
        <button className="projects__button">Agency</button>
        <button className="projects__button">Pallette-Picker</button>
        <button className="projects__button">Heart</button>
      </section>
      <section className="contact--text">
        <p>Here is some text</p>
      </section>
    </section>
  );
};

export default Projects;
