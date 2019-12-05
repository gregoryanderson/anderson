import React from "react";
import "./Contact.css";
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

const Contact = props => {
  return (
    <section className="main--content">
      <section className="contact--buttons">
        <button className="projects__button">Email</button>
        <button className="projects__button">Phone</button>
      </section>
      <section className="contact--text">
        <p>phone number is 508.902.8048</p>
      </section>
    </section>
  );
};

export default Contact;
