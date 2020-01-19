import React, { useState } from "react";
import "./Main.css";

const Experience = props => {
  const [teach, setTeach] = useState(false);
  const [husband, setHusband] = useState(false);
  const [soldier, setSoldier] = useState(false);
  const [chief, setChief] = useState(false);

  const handleClick = name => {
    if (name === "teach") {
      setTeach(true);
      setHusband(false);
      setSoldier(false);
      setChief(false);
    } else if (name === "husband") {
      setTeach(false);
      setHusband(true);
      setSoldier(false);
      setChief(false);
    } else if (name === "soldier") {
      setTeach(false);
      setHusband(false);
      setSoldier(true);
      setChief(false);
    } else if (name === "chief") {
      setTeach(false);
      setHusband(false);
      setSoldier(false);
      setChief(true);
    } else {
      setTeach(false);
      setHusband(false);
      setChief(false);
      setSoldier(false);
    }
  };

  const determineText = () => {
    if (teach) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Preschool Teacher</h1>
            <p className="job-p">
              As a preschool teacher, I learned about how important compassion
              is within a business model. Our clients- parents, cared very
              deeply about the outcome of our product- the developmental growth
              of their children. Often this involved exploring sensitive topics
              such as behavioral issues or administering an individual education
              plan. My outlook was to always start with finding common ground to
              collaborate with parents on. When both sides agreed on small,
              achievable goals and shared open communication about expectations,
              success was often found.
            </p>
          </section>
          {/* <section className="projects--img">
            <img
              src={require("./GREG-01.png")}
              alt="Gregory Anderson"
              className="projects--image"
            />
          </section> */}
        </>
      );
    } else if (soldier) {
      return (
        <>
          <section className="projects--story">                     
            <h1 className="job-title">Soldier</h1>
            <p className="job-p">
              As a soldier, I grasped the concept of how a team must work
              together in order to accomplish the mission. More often than not,
              someone must sacrifice in order for the team to achieve the goal.
              These sacrifices are usually go unacknowledged and a
              disproportionate amount of credit goes in the direction of someone
              else. A new objective will come along and with that comes more
              responsibility, sacrifice, and credit. Each member must take the
              appropriate load in order for the team to travel the furthest
              distance, and for the longest time.{" "}
            </p>
          </section>
          {/* <section className="projects--img">
            <img
              src={require("./GREG-01.png")}
              alt="Gregory Anderson"
              className="projects--image"
            />
          </section> */}
        </>
      );
    } else if (husband) {
      return (
        <>
          <section className="projects--story">
            <p>husband</p>
          </section>
          {/* <section className="projects--img">
            <img
              src={require("./GREG-01.png")}
              alt="Gregory Anderson"
              className="projects--image"
            />
          </section> */}
        </>
      );
    } else if (chief) {
      return (
        <>
          <section className="projects--story">         
            <h1 className="job-title">Branch Chief</h1>
            <p className="job-p">
              As a Branch Chief, I determined the life cycle of our products. I
              entered the NSA as an Arabic Linguist and was promoted twice in 18
              months. My daily routine went from from translation and SQL
              queries to leading daily standup meetings and conducting
              performance reviews. New intelligence from across the world needed
              to be collected, analyzed, translated, reported, briefed, and
              disseminated properly in as little as ten minutes.
            </p>
            <p className="job-p">
              I also recognized the importance of mentorship as a management
              style. Our team was 25 people working on a 24/7/365 top-secret
              mission. It was grueling with high turnover rate in order to maintain fresh minds. I implemented a development program that trained people to a
              higher standard in a shorter amount of time. The focus was on
              incremental, achievable goals and holding people accountable for
              meeting them. The success of the program led to my third promotion
              to the training manager for the 100 person division while also
              performing my role as branch chief.
            </p>
          </section>
          {/* <section className="projects--img">
            <img
              src={require("./GREG-01.png")}
              alt="Gregory Anderson"
              className="projects--image"
            />
          </section> */}
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
            className={teach ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("teach")}
          >
            Preschool Teacher
          </button>
        </section>
        {/* <section className="projects--btns">
          <button
            className={husband ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("husband")}
          >
            Husband
          </button>
        </section> */}
        <section className="projects--btns">
          <button
            className={soldier ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("soldier")}
          >
            Soldier
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={chief ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("chief")}
          >
            Branch Chief
          </button>
        </section>
      </section>
      <section className="contact--text">{determineText()}</section>
    </section>
  );
};

export default Experience;
