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
              Working in a preschool was a fascinating experience with an
              incredible amount of good humor. It gave me the chance to be in an
              environment where the numbers heavily favor the opposite sex. This
              has made inclusion an important exercise of mine. Finally, it was
              my first time practicing selflessness. Helping others find their
              voices and agency is rewarded with laughter every single day.{" "}
            </p>
            <p>
              Conventions that I have taken from that time relate to how
              important compassion is within a business model. Our product was
              the developmental growth of children. Our clients were parents who
              cared very deeply about those children. Working with them to
              ensure that goals were met included having difficult
              conversations. If those conversations displayed patience and
              understanding, success was ultimately found.
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
              My first year in the army was spent in an intensive course
              learning Arabic. Over the course of 15 months, I mastered the
              Arabic language to the level of a college freshman. To this day,
              learning a second language is one of my proudest achievements. An
              immediate connection is made whenever I speak to someone in their
              language rather than force them to speak my own.
            </p>
            <p className="job-p">
              The rest of my time in the military was spent between mission and
              the field. My biggest takeaway is how a team must work together in
              order to accomplish a objective. More often than not, one team
              member sacrifices in order for a team to achieve their goal. These
              endurances usually go unacknowledged and a disproportionate amount
              of credit flows in the direction of someone else. A new project
              will come along and with that comes more responsibility and
              credit. Each member must divide the shares appropriately in order
              for the team to travel the furthest distance, and for the longest
              time.{" "}
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
              months. My daily routine went from from live Arabic translation
              and SQL queries to leading daily standup meetings and conducting
              performance reviews. New intelligence from across the world needed
              to be collected, analyzed, translated, reported, briefed, and
              disseminated properly in as little as ten minutes.
            </p>
            <p className="job-p">
              I also recognized the importance of mentorship as a management
              style. Our team was 25 people working on a 24/7/365 top-secret
              mission. It was grueling with high turnover rate in order to
              maintain fresh minds. I implemented a development program that
              trained people to a higher standard in a shorter amount of time.
              The focus was on incremental, achievable goals and holding people
              accountable for meeting them. The success of the program led to my
              third promotion. In conjunction with my role as branch chief, I
              was named as the training manager for the 100 person division.
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
