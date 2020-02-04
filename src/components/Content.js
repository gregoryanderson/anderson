import React, { useState } from "react";
import "./Main.css";

const Content = () => {
  return (
    <section className="main--content">
      <section className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jdAADIpF1GA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section className="video--text">
        <p className="video--location">1909 Turing Top Talks</p>
        <p>Bites, Bytes, and A Whole Lot of Cable</p>
        <a
          href="https://medium.com/@yahtzeemoomtaz/"
          className="video--location"
        >
          Link To Slides
        </a>
      </section>
    </section>
  );
};

export default Content;
