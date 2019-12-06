import React, { useState, useEffect } from "react";
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
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);

  const handleClick = name => {
    if (name === "email") {
      setEmail(true);
      setPhone(false);
    }
    if (name === "phone") {
      setEmail(false);
      setPhone(true);
    }
  };

  const determineText = () => {
    if (phone) {
      return         <>
      <section className="projects--story">
        <p>phone</p>
      </section>
      <section className="projects--img">
        <img src={require("./GREG-01.png")} className="projects--image" />
      </section>
    </>;
    } else if (email) {
      return         <>
      <section className="projects--story">
        <p>email</p>
      </section>
      <section className="projects--img">
        <img src={require("./GREG-01.png")} className="projects--image" />
      </section>
    </>;
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
            className={email ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("email")}
          >
            Email
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={phone ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("phone")}
          >
            Phone
          </button>
        </section>
      </section>
      <section className="contact--text">{determineText()}</section>
    </section>
  );
};

export default Contact;
