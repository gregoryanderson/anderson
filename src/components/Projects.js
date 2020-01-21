import React, { useState } from "react";
import "./Projects.css";

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
            <h1 className="job-title">Agency</h1>
            <p className="job-p">
              A React front-end matched Python/Flask back-end to create an app
              that matches people with a slight disability with those willing to
              offer small bits of help. A group project. Won the 1904 Turing
              Demo Competition.
            </p>
            <section className="project-links-section">
              <a href="https://github.com/gregoryanderson/Agency-fe" className="project-links">Github</a>
              <a href="http://agency-fe.s3-website-us-east-1.amazonaws.com/" className="project-links">Live Site</a>
            </section>
          </section>
        </>
      );
    } else if (heart) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Heart</h1>
            <p className="job-p">
              A React app that utilizes the Rijksmuseum API to allow a user to
              search for paintings in a variety of ways. It implements Redux for
              state management. All methods tested in Jest/Enzyme. A solo
              project.
            </p>
            <section className="project-links-section">
              <a href="https://github.com/gregoryanderson/heart" className="project-links">Github</a>
              <a href="https://heart-art.herokuapp.com/" className="project-links">Live Site</a>
            </section>
          </section>
        </>
      );
    } else if (palette) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Palette Picker</h1>
            <p className="job-p">
              A React app that utilizes the tools of PostgreSQL, Node.js, and
              Express.js to create my the back-end build. This project selects
              random colors and add them to a projects folder in a one-to-many
              relationship. A paired project
            </p>
            <section className="project-links-section">
              <a href="https://github.com/gregoryanderson/frontend-palette-picker" className="project-links">Github</a>
              <a href="https://fe-palette.herokuapp.com/" className="project-links">Live Site</a>
            </section>
          </section>
        </>
      );
    } else {
      return (
        <section>
          <img
            src={require("./GREG-01.png")}
            alt="Gregory Anderson"
            className="projects--img"
          />
        </section>
      );
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
