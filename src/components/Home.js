import React from "react";
import "./Main.css";
import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa";

const Home = props => {
  return (
    <section className="main--content">
      <section id="main--outline">
        <img
          src={require("./GREG-01.png")}
          alt="Gregory Anderson"
          id="main__img"
        />
        <h1>Gregory Anderson</h1>
        <h1>Software Engineer</h1>
        <p>He/Him</p>
        <section className="main--links">
          <section className="main--link">
            <a href="https://github.com/gregoryanderson">
              <FaGithub size={24} style={{ color: "white" }} />
            </a>
          </section>
          <section className="main--link">
            <a href="https://www.linkedin.com/in/gregandersondev/">
              <FaLinkedinIn size={24} style={{ color: "white" }} />
            </a>
          </section>
          <section className="main--link">
            <a href="https://medium.com/@yahtzeemoomtaz/">
              <FaMedium size={24} style={{ color: "white" }} />
            </a>
          </section>
        </section>
        {/* <button class="srojects__button">Hire Me</button> */}
      </section>
    </section>
  );
};

export default Home;
