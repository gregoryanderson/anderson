import React, { useState, useEffect } from "react";
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
  const [agency, setAgency] = useState(false);
  const [heart, setHeart] = useState(false);
  const [palette, setPalette] = useState(false);

  const handleClick = name => {
    if (name === "agency") {
      setAgency(true);
      setHeart(false);
      setPalette(false);
    } else if (name === "heart") {
      setAgency(false);
      setHeart(true);
      setPalette(false);
    } else if (name === "palette") {
      setAgency(false);
      setHeart(false);
      setPalette(true);
    } else {
      setAgency(false);
      setHeart(false);
      setPalette(false);
    }
  };

  const determineText = () => {
    if (agency) {
      return (
        <>
          <section className="projects--story">
            <p>agency</p>
          </section>
          <section className="projects--img">
            <img src={require("./GREG-01.png")} className="projects--image" />
          </section>
        </>
      );
    } else if (heart) {
      return (
        <>
          <section className="projects--story">
            <p>heart</p>
          </section>
          <section className="projects--img">
            <img src={require("./GREG-01.png")} className="projects--image" />
          </section>
        </>
      );
    } else if (palette) {
      return (
        <>
          <section className="projects--story">
            <p>palette</p>
          </section>
          <section className="projects--img">
            <img src={require("./GREG-01.png")} className="projects--image" />
          </section>
        </>
      );
    } else {
      return <section>
        <img src={require("./GREG-01.png")} className="projects--img" />
      </section>;
    }
  };

  return (
    <section className="main--content">
      <section className="contact--buttons">
        <section className="projects--btns">
          <button
            className={agency ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("agency")}
          >
            Agency
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={palette ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("palette")}
          >
            Pallette-Picker
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={heart ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("heart")}
          >
            Heart
          </button>
        </section>
      </section>
      <section className="contact--text">{determineText()}</section>
    </section>
  );
};

export default Projects;
