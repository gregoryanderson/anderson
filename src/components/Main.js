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
import Home from "./Home"
import Journal from "./Journal"
import Experience from "./Experience"
import Contact from "./Contact"


const Main = (props) => {
    console.log("main", props.route)

    const determineTheRoute = () => {
        if (props.route === "home" || props.route === "") {
            console.log(
                'fuck'
            )
            return (<Home />)
        }
        if (props.route === "experience"){
            return (<Experience />)
        }
        if (props.route === "journal"){
            return (<Journal />)
        }
        if (props.route === "contact"){
            return (<Contact />)
        }
    }

  return (
    <section className="Main">
      {/* <section id="main--content">
        <section id="main--rocket">
          <AiOutlineRocket size={64} color="#EB6D4A" />
        </section>
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
      </section> */}
      {determineTheRoute()}
    </section>
  );
};

export default Main;
