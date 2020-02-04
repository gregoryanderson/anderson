import React, { useState } from "react";
import "./Main.css";

const Resume = () => {
  return (
    <section className="main--content">
      <section className="video">
        <iframe
          src={require("./ResumeForGregoryAnderson.pdf")}
          width="560"
          height="315"
        ></iframe>
      </section>
    </section>
  );
};

export default Resume;
