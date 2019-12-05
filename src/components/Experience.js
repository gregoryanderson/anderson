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

const Experience = props => {
  return (
    <section className="main--content">
      <section className="contact--buttons">
        <button className="projects__button">Preschool Teacher</button>
        <button className="projects__button">Husband</button>
        <button className="projects__button">Soldier</button>
        <button className="projects__button">Branch Chief</button>
      </section>
      <section className="contact--text">
        <p>I became a front-end developer, because I got curious about the data. Working at the NSA, I had a lot of it. How was I able to see all of this real-time data of events happening across the planet. I knew the was inside all of Python and Perl applications I was using, but I couldn't sort it out alone. I decided after my contract with the Army was up that I would dedicate the time to finally learn it which directed to Turing School of Software and Design. I spent my time there working with wonderful people on group projects, worker as both mentee and mentor in driver/navigating type roles, and bettering myself and my understanding of what it means to be an excellent software developer.</p>
      </section>
    </section>
  );
};

export default Experience;
