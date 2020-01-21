import React, { useState } from "react";
import "./Contact.css";

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
      return (
        <>
          <section className="projects--story">
            <p>To contact Greg by phone:</p>
            <section className="contact-info">
              <p>508-902-8048</p>
            </section>
          </section>
        </>
      );
    } else if (email) {
      return (
        <>
          <section className="projects--story">
            <p>To contact Greg by email:</p>
            <section className="contact-info">
              <p>anderson.gregory.mail@gmail.com</p>
            </section>
          </section>
        </>
      );
    } else {
      return (
        <section>
          <img
            src={require("./GREG-01.png")}
            alt="Gregory Anderson"
            className="projects--img"
          />
        </section>
      );
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
