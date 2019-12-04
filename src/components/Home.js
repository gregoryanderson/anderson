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

const Home = props => {
  return (
    <section className="main--content">
      <section id="main--outline">
        <img src={require("./man.png")} id="main__img" />
        <h1>Gregory Anderson</h1>
        <h1>Software Engineer</h1>
        <section className="main--links">
          <section className="main--link">
            <FaGithub size={24} />
          </section>
          <section className="main--link">
            <FaLinkedinIn size={24} />
          </section>
        </section>
        <button id="main--button">Hire Me</button>
      </section>
    </section>
  );
};

export default Home;
