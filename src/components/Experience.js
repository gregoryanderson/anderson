import React, { useState, useEffect } from "react";
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
            <p>teacher</p>
          </section>
          <section className="projects--img">
            <img src={require("./GREG-01.png")} className="projects--image" />
          </section>
        </>
      );
    } else if (soldier) {
      return (
        <>
          <section className="projects--story">
            <p>soldier</p>
          </section>
          <section className="projects--img">
            <img src={require("./GREG-01.png")} className="projects--image" />
          </section>
        </>
      );
    } else if (husband) {
      return (
        <>
          <section className="projects--story">
            <p>husband</p>
          </section>
          <section className="projects--img">
            <img src={require("./GREG-01.png")} className="projects--image" />
          </section>
        </>
      );
    } else if (chief) {
      return (
        <>
          <section className="projects--story">
            <p>chief</p>
          </section>
          <section className="projects--img">
            <img src={require("./GREG-01.png")} className="projects--image" />
          </section>
        </>
      );
    } else {
      return <section>
      <img src={require("./GREG-01.png")} className="projects--img" />
    </section>;
    }
  };

  return (
    <section className="main--content">
      <section className="contact--buttons">
        <section className="projects--btns">
          <button
            className={teach ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("teach")}
            onClick={() => handleClick("teach")}
          >
            Preschool Teacher
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={husband ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("husband")}
            onClick={() => handleClick("husband")}
          >
            Husband
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={soldier ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("soldier")}
            onClick={() => handleClick("soldier")}
          >
            Soldier
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={chief ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("chief")}
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
