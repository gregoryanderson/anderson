import React, { useState } from "react";
import "./Main.css";
import "./Projects.css";

const Resume = () => {
  const [printer, setPrinter] = useState(false);

  const handleClick = name => {
    if (name === "printer") {
      setPrinter(true);
    } else {
      setPrinter(false);
    }
  };

  const determinePDF = () => {
    if (printer) {
      return (
        <iframe
          src={require("./PrinterResume.pdf")}
          width="560"
          height="315"
        ></iframe>
      );
    } else {
      return (
        <iframe
          src={require("./ResumeForGregoryAnderson.pdf")}
          width="560"
          height="315"
        ></iframe>
      );
    }
  };

  const determineButton = () => {
    if (printer) {
      return (
        <button
          className={printer ? "resume__button" : "resume__button--true"}
          onClick={() => handleClick("")}
        >
          Back To Original
        </button>
      );
    } else {
      return (
        <button
          className={printer ? "resume__button--true" : "resume__button"}
          onClick={() => handleClick("printer")}
        >
          Click For Printer Friendly Version
        </button>
      );
    }
  };

  return (
    <section className="main--content">
      <section className="video">{determinePDF()}</section>
      <section className="projects--btns">{determineButton()}</section>
    </section>
  );
};

export default Resume;
