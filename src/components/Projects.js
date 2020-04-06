import React, { useState } from "react";
import "./css/Projects.css";

const Projects = (props) => {
  const [agency, setAgency] = useState(false);
  const [heart, setHeart] = useState(false);
  const [palette, setPalette] = useState(false);
  const [finance, setFinance] = useState(false);
  const [chat, setChat] = useState(false);
  const [uni, setUni] = useState(false);
  const [ruby, setRuby] = useState(false);
  const [js, setJs] = useState(false);

  const handleClick = (name) => {
    if (name === "ruby") {
      setRuby(true);
      setJs(false);
    } else if (name === "js") {
      setRuby(false);
      setJs(true);
    } else {
      setRuby(false);
      setJs(false);
    }
  };

  const handleClickTwo = (name) => {
    if (name === "agency") {
      setAgency(true);
      setHeart(false);
      setPalette(false);
      setFinance(false);
      setChat(false);
      setUni(false);
    } else if (name === "heart") {
      setAgency(false);
      setHeart(true);
      setPalette(false);
      setFinance(false);
      setChat(false);
      setUni(false);
    } else if (name === "palette") {
      setAgency(false);
      setHeart(false);
      setPalette(true);
      setFinance(false);
      setChat(false);
      setUni(false);
    } else if (name === "finance") {
      setAgency(false);
      setHeart(false);
      setPalette(false);
      setFinance(true);
      setChat(false);
      setUni(false);
    } else if (name === "chat") {
      setAgency(false);
      setHeart(false);
      setPalette(false);
      setFinance(false);
      setChat(true);
      setUni(false);
    } else if (name === "uni") {
      setAgency(false);
      setHeart(false);
      setPalette(false);
      setFinance(false);
      setChat(false);
      setUni(true);
    }
  };

  const determineButtons = () => {
    if (ruby) {
      return (
        <section className="contact--buttons">
          <section className="projects--btns">
            <button
              className={agency ? "projects__button--true" : "projects__button"}
              onClick={() => handleClickTwo("chat")}
            >
              Web Chat
            </button>
          </section>
          <section className="projects--btns">
            <button
              className={
                palette ? "projects__button--true" : "projects__button"
              }
              onClick={() => handleClickTwo("uni")}
            >
              Tech University
            </button>
          </section>
          <section className="projects--btns">
            <button
              className={heart ? "projects__button--true" : "projects__button"}
              onClick={() => handleClickTwo("finance")}
            >
              Finance Tracker
            </button>
          </section>
        </section>
      );
    } else if (js) {
      return (
        <section className="contact--buttons">
          <section className="projects--btns">
            <button
              className={agency ? "projects__button--true" : "projects__button"}
              onClick={() => handleClickTwo("agency")}
            >
              Agency
            </button>
          </section>
          <section className="projects--btns">
            <button
              className={
                palette ? "projects__button--true" : "projects__button"
              }
              onClick={() => handleClickTwo("palette")}
            >
              Pallette-Picker
            </button>
          </section>
          <section className="projects--btns">
            <button
              className={heart ? "projects__button--true" : "projects__button"}
              onClick={() => handleClickTwo("heart")}
            >
              Heart
            </button>
          </section>
        </section>
      );
    } else {
      return <section className="contact--buttons"></section>;
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
              <a
                href="https://github.com/gregoryanderson/Agency-fe"
                className="project-links"
              >
                Github
              </a>
              <a
                href="http://agency-fe.s3-website-us-east-1.amazonaws.com/"
                className="project-links"
              >
                Live Site
              </a>
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
              <a
                href="https://github.com/gregoryanderson/heart"
                className="project-links"
              >
                Github
              </a>
              <a
                href="https://heart-art.herokuapp.com/"
                className="project-links"
              >
                Live Site
              </a>
            </section>
          </section>
        </>
      );
    } else if (uni) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Tech University</h1>
            <p className="job-p">
              An Rails application that lists courses and gives a short synopsis of each course. Students may enroll for courses and see what courses other students have signed up for. Utilizing Material-UI for views. A solo project. Username, 'guest@example.com', and password, 'password'.
            </p>
            <section className="project-links-section">
              <a
                href="https://github.com/gregoryanderson/tech-uni"
                className="project-links"
              >
                Github
              </a>
              <a
                href="https://tech-uni.herokuapp.com/"
                className="project-links"
              >
                Live Site
              </a>
            </section>
          </section>
        </>
      );
    } else if (finance) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Finance Tracker</h1>
            <p className="job-p">
              A Rails app built that tracks personal stocks, as well as keeps
              you updated on your friends stocks. Utilizing bootstrap for the front end views. A solo project. 
            </p>
            <section className="project-links-section">
              <a
                href="https://github.com/gregoryanderson/finance-tracker"
                className="project-links"
              >
                Github
              </a>
              <a
                href="https://finance-friend.herokuapp.com/"
                className="project-links"
              >
                Live Site
              </a>
            </section>
          </section>
        </>
      );
    } else if (chat) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Message Me</h1>
            <p className="job-p">A web chat built in Ruby/Rails that accesses web sockets for immediate messaging on the screen. The front-end utilizes Semantic-UI for a stylish, complete look. A solo project. Use the name, "guest", and the password, "password", for access!</p>
            <section className="project-links-section">
              <a
                href="https://github.com/gregoryanderson/instant-message"
                className="project-links"
              >
                Github
              </a>
              <a
                href="https://instant-message-me.herokuapp.com/"
                className="project-links"
              >
                Live Site
              </a>
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
              <a
                href="https://github.com/gregoryanderson/frontend-palette-picker"
                className="project-links"
              >
                Github
              </a>
              <a
                href="https://fe-palette.herokuapp.com/"
                className="project-links"
              >
                Live Site
              </a>
            </section>
          </section>
        </>
      );
    } else {
      return (
        <section>
          <img
            src={require("./assets/GREG-01.png")}
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
            className={ruby ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("ruby")}
          >
            Ruby/Rails
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={js ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("js")}
          >
            Javascript/React
          </button>
        </section>
      </section>
      <section>{determineButtons()}</section>
      <section className="project--text">{determineText()}</section>
    </section>
  );
};

export default Projects;
