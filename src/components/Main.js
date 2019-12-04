import React from "react";
import "./Main.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <section className="Main">
      <img src={require("./man.png")} id="main__img" />
      <h1>Gregory Anderson</h1>
      <h1>Software Engineer</h1>
      <section className="main--links">
        <section className="main--link">
          <FaGithub size={24}/>
        </section>
        <section className="main--link">
          <FaLinkedinIn size={24}/>
        </section>
      </section>
    </section>
  );
};

export default Main;
