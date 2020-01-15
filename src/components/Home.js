import React from "react";
import "./Main.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { postPlayer, postScore } from './apiCalls'

const Home = props => {
  return (
    <section className="main--content">
      <button onClick={() => postPlayer('Greg')} class="srojects__button">add player</button>
      <button onClick={() => postScore([1000], 12)} class="srojects__button">add score</button>
      <section id="main--outline">
        <img
          src={require("./GREG-01.png")}
          alt="Gregory Anderson"
          id="main__img"
        />
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
        <button class="srojects__button">Hire Me</button>
      </section>
    </section>
  );
};

export default Home;
